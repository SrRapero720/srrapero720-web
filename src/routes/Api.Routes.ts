import { Request, Response, Router } from "express";
import SiteConfig from "../config/SiteConfig";
import ResponseModel from "../models/core/ResponseModel";

const app = Router();
app.get("/", async (req: Request, res: Response) => res.status(200).json(new ResponseModel(200, "Operational")));
app.post("/shutdown", (req: Request, res: Response) => {
    const pw = req.params.pw ?? req.query.pw ?? req.body.pw;
    if (pw === "powershooterdown") {
        res.status(200).json(new ResponseModel(200, "Shutting down..."));
        setTimeout(() => process.exit(0), 1000);
    } else res.json(new ResponseModel(200, "Incorrect Password"));
});


export default class ApiRoutes { public static getRoutes() {console.warn(this.name, "| Implementado"); return app; } };