import express from "express";
import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json());

const client = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "stdout",
            level: "info",
        },
    ],
});

client.$on("query", (e) => {
    console.log("Raw query:", e.query);
    console.log("Params:", e.params);
    console.log("Duration:", e.duration);
});

const getUser = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1,
        },
        include: {
            todos: true,
        },
    });

    console.log(user);
};

getUser();

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    
    const users = await client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            username: true,
            password: true,
            age: true,
            todos: true
        }
    });
    
    res.json({
        users
    })
});

app.listen(3000);