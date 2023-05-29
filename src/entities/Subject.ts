import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity("subject")
export class Subject extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: Number

    @Column({ type: "text" })
    name: String

    @ManyToMany(() => Room, room => room.subjects)
    @JoinTable({
        name: "room_subject",
        joinColumn: {
            name: "room_id",
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name:"subject_id",
            referencedColumnName:"id"
        }
    })
    rooms: Room[]

    constructor(id : Number,name: String, rooms: Room[]) {
        super();
        this.id = id;
        this.name = name;
        this.rooms = rooms;
      }
}