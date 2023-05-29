import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity("videos")
export class Videos extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: Number

    @Column({ type: "text" })
    title: String

    @Column({ type: "text" })
    url: String

    @ManyToOne(() => Room, room => room.videos)
    @JoinColumn({name: 'room_id'})
    room: Room

    constructor(id: Number,title: String,url: String,room: Room) {
        super();
        this.id = id;
        this.title = title;
        this.url = url;
        this.room = room;
    }
}