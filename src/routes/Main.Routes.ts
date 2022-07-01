import { Request, Response, Router } from "express";
import SiteConfig from "../config/SiteConfig";

const app = Router();
app.get("/", async (req: Request, res: Response) => res.status(200).render("home/home.ejs", new SiteConfig(req.url, req.path)));
app.get("/proyectos", (req: Request, res: Response) => res.status(200).render("home/proyectos.ejs", new SiteConfig(req.url, req.path)));
app.get("/portafolio", (req: Request, res: Response) => res.status(200).render("home/portafolio.ejs", new SiteConfig(req.url, req.path)));
app.get("/sobre-mi", (req: Request, res: Response) => res.status(200).render("home/sobre-mi.ejs", new SiteConfig(req.url, req.path)));

export default class MainRoutes { public static getRoutes() {return app;} };