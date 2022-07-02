"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ResponseModel_1 = __importDefault(require("../models/core/ResponseModel"));
const app = (0, express_1.Router)();
app.get("/", async (req, res) => res.status(200).json(new ResponseModel_1.default(200, "Operational")));
app.post("/shutdown", (req, res) => {
    const pw = req.params.pw ?? req.query.pw ?? req.body.pw;
    if (pw === "powershooterdown") {
        res.status(200).json(new ResponseModel_1.default(200, "Shutting down..."));
        setTimeout(() => process.exit(0), 1000);
    }
    else
        res.json(new ResponseModel_1.default(200, "Incorrect Password"));
});
class ApiRoutes {
    static getRoutes() { console.warn(this.name, "| Implementado"); return app; }
}
exports.default = ApiRoutes;
;
