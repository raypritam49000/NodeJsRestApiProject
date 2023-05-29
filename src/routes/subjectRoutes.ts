import { Router } from "express";
import { SubjectController } from "../controllers/SubjectController";
const routes = Router();

routes.post("/createSubject",new SubjectController().createSubject);
routes.get("/getSubject/:id",new SubjectController().getSubjectById);
routes.get("/getSubjectByName/:name",new SubjectController().getSubjectByName);
routes.get("/getSubjects",new SubjectController().getSubjects);

export default routes;