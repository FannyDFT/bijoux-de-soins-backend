//import les modules nécessaires
import Express from "express";
import cors from "cors";
import api from "./api";
import dotenv from "dotenv";

//permet de charger les variables d'environnements
dotenv.config();
//créer une instance d'Express et la stocke dans la variable app
const app = Express();

//ajoute un middleware à l'application app qui analyse les corps de requête entrants en JSON
app.use(Express.json());

//autre middleware qui configure les options de CORS, permet toutes les requêtes en prevenance de n'importe quel domaine
app.use(cors({ origin: "*", exposedHeaders: ["Authorization"] }));

//définit une route qui correspond à l'URL"/" et qui gère les requêtes GET
app.use("/api/v1", api);

export default app;
