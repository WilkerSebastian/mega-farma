import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: true,
    ssl: process.env.NODE_ENV === "development" ? false : {
        rejectUnauthorized: false
    },
    logging: process.env.NODE_ENV === "development",
    entities: ["src/model/*.ts"],
    migrations: [],
    subscribers: []
})