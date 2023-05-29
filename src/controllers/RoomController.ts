import { Request, Response } from 'express';
import { roomRepository } from '../repositories/RoomRepository';
import { subjectRepository } from '../repositories/SubjectRepository';

export class RoomController {

    createRoom = async (req: Request, res: Response) => {
        const { name, description } = req.body;
        try {
            const newRoom = roomRepository.create({ name, description })
            const saveRoom = await roomRepository.save(newRoom);
            return res.status(201).json(saveRoom);
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }


    createRoomSubject = async (req: Request, res: Response) => {
        const { subject_id } = req.body;
        const { idRoom } = req.params;
        try {

            const room = await roomRepository.findOneById(idRoom);
            if (!room) {
                return res.status(404).json({ message: "Room does not exists!!!" })
            }

            const subject = await subjectRepository.findOneById(subject_id);

            if (!subject) {
                return res.status(404).json({ message: "Subject does not exists!!!" })
            }

            const roomSubject = {
                ...room,
                subjects: [subject]
            }

            const createRoomSubject = await roomRepository.save(roomSubject);

            return res.status(201).json(createRoomSubject);

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }


    getRooms = async (req: Request, res: Response) => {
        try {

            const rooms = await roomRepository.find({
                relations: {
                    subjects: true
                }
            })

            return res.status(200).json(rooms);
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }


}