import express from "express";
import router from "./routes";

const server = express();

server.use(express.json());
server.use(router);

export default server; //estamos indicando que SOLO queremos exportar server.Es decir, solo importa UNA cosa
