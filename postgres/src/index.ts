import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());
const pgClient = new Client({
    user: "premcharan",
    host: "localhost",
    port: 5432,
    database: "test0",
});

pgClient.connect();

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const insertQuery = `
    insert into users (name, email, password)
    values ($1, $2, $3);
    `;

    const response = await pgClient.query(insertQuery, [username, email, password]);
    console.log("user signup successfull...");
    console.log(response);
    res.json({message: "signup successfull..."});
    
});

app.listen(3000, () => {
    console.log("server running on port 3000...")
});
