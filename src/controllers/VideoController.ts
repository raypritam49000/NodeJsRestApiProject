import { Request, Response } from 'express';
import { videoRepository } from '../repositories/VideoRepository';
import { roomRepository } from '../repositories/RoomRepository';



export class VideoController {

    createVideo = async (req: Request, res: Response) => {
        const { title, url } = req.body;
        const {idRoom}  = req.params;
        try {
           const room = await roomRepository.findOneById(idRoom);
            if(!room){
                return res.status(404).json({ message: "Room does not exists!!!" })
            }

            const newVideos = await videoRepository.create({title,url,room})
            const createVideos = await videoRepository.save(newVideos);
            return res.status(201).json(createVideos)

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

  

      
}

