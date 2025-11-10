"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
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
    values ('${username}', '${email}', '${password}' )
    `;
    const response = await pgClient.query(insertQuery);
    console.log("user signup successfull...");
    console.log(response.rows);
    res.json(response.rows);
});
app.listen(3000, () => {
    console.log("server running on port 3000...");
});
//# sourceMappingURL=index.js.map