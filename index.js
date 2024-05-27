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


app.get("/",(req,res)=>{
    res.render("home")
})
