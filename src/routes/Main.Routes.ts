import { Request, Response, Router } from "express";
import SiteConfig from "../config/SiteConfig";

const app = Router();
app.get("/", async (req: Request, res: Response) => res.status(200).render("home/home.ejs", new SiteConfig(req.url, req.path)));
app.get("/proyectos", async (req: Request, res: Response) => res.status(200).render("home/proyectos.ejs", new SiteConfig(req.url, req.path)));
app.get("/portafolio", async (req: Request, res: Response) => res.status(200).render("home/portafolio.ejs", new SiteConfig(req.url, req.path)));
app.get("/sobre-mi", async (req: Request, res: Response) => res.status(200).render("home/sobre-mi.ejs", new SiteConfig(req.url, req.path)));
app.get("/500", async (req: Request, res: Response) => res.status(200).render("error/500.ejs", new SiteConfig(req.url, req.path, new Error("No se encontro ningun error, asi que generamos uno"))))

export default class MainRoutes { public static getRoutes() {return app;} };