import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// aaaaaaaaaaa

app.listen(3001, () => {
    console.log("Servidor rodando na porta: 3001");
});
