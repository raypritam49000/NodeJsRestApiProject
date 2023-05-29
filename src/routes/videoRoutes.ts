import { Router } from "express";
import { VideoController } from "../controllers/VideoController";
const routes = Router();

routes.post("/:idRoom/createVideo",new VideoController().createVideo)

export default routes;