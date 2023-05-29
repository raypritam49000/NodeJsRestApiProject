import { Request, Response } from 'express';
import { subjectRepository } from '../repositories/SubjectRepository';
import { Equal } from 'typeorm/find-options/operator/Equal';
import { EqualOperator } from 'typeorm';
import { Subject } from '../entities/Subject';

export class SubjectController {

    createSubject = async (req: Request, res: Response) => {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Bad Request" })
        }

        try {
            const newSubject = subjectRepository.create({ name })
            const saveSubject = await subjectRepository.save(newSubject);
            return res.status(201).json(saveSubject);
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    getSubjectById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const userId = parseInt(req.params.id);
            const subject = await subjectRepository.findById(Number(id));
            const subject1 = await subjectRepository.findUserByConditions({ id: Equal(userId) })
            const subject2 = await subjectRepository.findOneBy({ id: Equal(id) });

            console.log("@@@ subject : ",subject);
            console.log("@@@ subject1 : ",subject1);
            console.log("@@@ subject2 : ",subject2);
            
            return res.status(200).json(subject);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    getSubjectByName = async (req: Request, res: Response) => {
        try {
            const name : string = req.params.name;
            const subject : Subject | null = await subjectRepository.findByName(name);
            return res.status(200).json(subject);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    getSubjects = async (req: Request, res: Response) => {
        try {
            const subjects : Subject[]  = await subjectRepository.findAll();
            return res.status(200).json(subjects);
        }
        catch (error) {
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }


}