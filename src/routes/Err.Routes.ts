import { NextFunction, Request, Response, Router } from "express";
import SiteConfig from "../config/SiteConfig";
import ResponseModel from "../models/core/ResponseModel";
import path from "path";

const app = Router();
function formatObject(req: Request, res: Response, next: NextFunction, err?: Error): { [index: string]: () => void } { 
    return {
        html: () => res.render(err ? "error/500.ejs" : "error/404.ejs", new SiteConfig(req.url, req.path, err)),
        json: () => res.json(new ResponseModel(err ? 500 : 404, err ? "Internal Server Error" : "Not Found", err)),
        text: () => res.send(err ? "Error interno del servidor" : "No encontrado"),
        default: () => res.status(404).send("No encontrado / No soportado")
    }
}

app.use((req: Request, res: Response, next: NextFunction) => res.status(404).format(formatObject(req, res, next)));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => res.status(500).format(formatObject(req, res, next, err)));
export default class ErrRoutes { public static getRoutes() {return app;} };