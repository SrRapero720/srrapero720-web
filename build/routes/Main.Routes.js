﻿"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SiteConfig_1 = __importDefault(require("../config/SiteConfig"));
const app = (0, express_1.Router)();
app.get("/", async (req, res) => res.status(200).render("home/home.ejs", new SiteConfig_1.default(req.url, req.path)));
app.get("/proyectos", (req, res) => res.status(200).render("home/proyectos.ejs", new SiteConfig_1.default(req.url, req.path)));
app.get("/portafolio", (req, res) => res.status(200).render("home/portafolio.ejs", new SiteConfig_1.default(req.url, req.path)));
app.get("/sobre-mi", (req, res) => res.status(200).render("home/sobre-mi.ejs", new SiteConfig_1.default(req.url, req.path)));
class MainRoutes {
    static getRoutes() { return app; }
}
exports.default = MainRoutes;
;
