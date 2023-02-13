import dotenv from "dotenv";
import express from "express";
import mustache from "mustache-express";
import path from "path";
import mainroutes from "./routes/index";

dotenv.config(); //arquivo de variáveis globais

const server = express(); // informa qual será o servidor

// Configura a view engine mustache
server.set("view engine", mustache);
server.set("views", path.join(__dirname) + "views"); //pasta das views
server.engine("mustache", mustache());

server.use(express.static(path.join(__dirname, "../public"))); //configura pasta de arquivos estáticos

//Rotas

server.use(mainroutes);

server.use((req, res) => {
  // caso não encontre as rotas acima ele exibe essa página.
  res.send("Página não encontrada!");
});

//Roda o servidor
server.listen(process.env.PORT);
