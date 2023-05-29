import { DataSource } from "typeorm";
import 'dotenv/config';
import 'reflect-metadata';


const port = parseInt(process.env.DB_PORT || "");
const host = process.env.DB_HOST as string;
const username = process.env.DB_USER as string;
const password = process.env.DB_PASS as string;
const database = process.env.DB_NAME as string;

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    synchronize: true,
    logging: true,
    entities: [`${__dirname} +"../../entities/*{.js,.ts}`],
    migrations: [`${__dirname} +'../../migrations/*.{ts,js}`], 
})