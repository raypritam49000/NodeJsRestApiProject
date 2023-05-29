import { FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../dbconfig/data-source";
import { Subject } from "../entities/Subject";


export const subjectRepository = AppDataSource.getRepository(Subject).extend({

    findById(id: number): Promise<Subject | null> {
        return this.createQueryBuilder("subject")
            .where("subject.id = :id", { id })
            .getOne();
    },

    findUserByConditions(conditions: FindOptionsWhere<Subject>): Promise<Subject | null> {
        return this.findOneBy(conditions);
    },

    findByName(name: string): Promise<Subject | null> {
        return this.createQueryBuilder("subject")
            .where("subject.name = :name", { name })
            .getOne();
    },

    findAll(): Promise<Subject[]>{
        return this.find()
    }

});






