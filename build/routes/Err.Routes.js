"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SiteConfig_1 = __importDefault(require("../config/SiteConfig"));
const ResponseModel_1 = __importDefault(require("../models/core/ResponseModel"));
const app = (0, express_1.Router)();
function formatObject(req, res, next, err) {
    return {
        html: () => res.render(err ? "error/500.ejs" : "error/404.ejs", new SiteConfig_1.default(req.url, req.path, err)),
        json: () => res.json(new ResponseModel_1.default(err ? 500 : 404, err ? "Internal Server Error" : "Not Found", err)),
        text: () => res.send(err ? "Error interno del servidor" : "No encontrado"),
        default: () => res.status(404).send("No encontrado / No soportado")
    };
}
app.use((req, res, next) => res.status(404).format(formatObject(req, res, next)));
app.use((err, req, res, next) => res.status(500).format(formatObject(req, res, next, err)));
class ErrRoutes {
    static getRoutes() { console.warn(this.name, "| Implementado"); return app; }
}
exports.default = ErrRoutes;
;
