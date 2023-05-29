import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videos } from './Videos';
import { Subject } from "./Subject";

@Entity("rooms")
export class Room extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: Number

    @Column({ type: "text" })
    name: String

    @Column({ type: "text", nullable: true })
    description: String

    @OneToMany(() => Videos, video => video.room)
    videos: Videos[]

    @ManyToMany(() => Subject, subject => subject.rooms)
    subjects: Subject[]

    constructor(id: Number, name: String, description: String, videos: Videos[], subjects: Subject[]) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.videos = videos;
        this.subjects = subjects;
    }
}