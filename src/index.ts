import express from 'express'
import { AppDataSource } from './dbconfig/data-source'
import subjectRoutes from './routes/subjectRoutes';
import roomRoutes from './routes/roomRoutes';
import videosRoutes from './routes/videoRoutes';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(express.json());

    app.use("/subjects", subjectRoutes);
    app.use("/rooms", roomRoutes);
    app.use("/videos", videosRoutes);

    return app.listen(process.env.PORT);
})