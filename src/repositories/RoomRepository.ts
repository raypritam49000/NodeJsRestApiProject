import { AppDataSource } from "../dbconfig/data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room);