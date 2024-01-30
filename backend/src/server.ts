import express from "express";
import cors from "cors";
import { sample_products, sample_tags } from "./data";

const app = express();
app.use(cors ({
    credentials:true,
    origin:["http://localhost:4200/"]
}));

app.get("/api/produtos", (req, res) => {
    res.send(sample_products);
})

app.get("/api/produtos/pesquisa/:termoPesquisado", (req, res) => {
    const termoPesquisado = req.params.termoPesquisado;
    const produtos = sample_products
    .filter(produto => produto.nome.toLowerCase()
    .includes(termoPesquisado.toLowerCase()));
    res.send(produtos);
})

app.get("/api/produtos/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/produtos/tag/:nomeDaTag", (req, res) => {
    const nomeDaTag = req.params.nomeDaTag;
    const produtos = sample_products
    .filter(produto => produto.tags?.includes(nomeDaTag));
    res.send(produtos);
})

app.get("/api/produtos/:idProduto", (req, res) => {
    const idProduto = req.params.idProduto;
    const produto = sample_products
    .find(produto => produto.id == idProduto);
    res.send(produto);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})