const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());


const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "perdidos_achados",
    password: "A_TUA_SENHA_DO_POSTGRES",
    port: 5432
});


app.get("/", (req,res)=>{
    res.send("Servidor Perdidos & Achados funcionando!");
});


app.listen(3000, ()=>{
    console.log("Servidor ligado na porta 3000");
});