import { Router } from "express";
import { RoomController } from "../controllers/RoomController";
const routes = Router();

routes.post("/createRoom",new RoomController().createRoom);
routes.post("/createSubjectRoom/:idRoom",new RoomController().createRoomSubject);
routes.get("/getRooms",new RoomController().getRooms);

export default routes;