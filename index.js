import express from "express";
import { create } from "express-handlebars";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static("public"));

app.use("/bootstrap",express.static(path.join(__dirname,"/node_modules/bootstrap/dist")));
app.use("/jquery",express.static(path.join(__dirname,"/node_modules/jquery/dist")));

const hbs = create({
	partialsDir: [
		path.resolve(__dirname,"./views/partials/"),
	],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.listen(3000,()=>{
   console.log( "Servidor escuchando en puerto http://localhost:3000");
})

let productos = [
    {id:1, nombre:"banana", img:"banana.png"},
    {id:2, nombre:"cebollas", img:"cebollas.png"},
    {id:3, nombre:"lechuga", img:"lechuga.png"},
    {id:4, nombre:"papas", img:"papas.png"},
    {id:5, nombre:"pimenton", img:"pimenton.png"},
    {id:6, nombre:"tomate", img:"tomate.png"}
]
app.get("/",(req,res)=>{
    res.render("home",{
        titulo: "Bienvenido a Mercado Web, seleccione sus productos",
        productos
    })
})
