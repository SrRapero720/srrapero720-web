"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const node_modules = path_1.default.join(process.cwd(), '/node_modules');
const dump = path_1.default.join(process.cwd(), "/static/dump");
let status = false;
const copyfiles = [
    { dir: path_1.default.join(dump, "deceiver.js"), target: path_1.default.join(node_modules, "http-deceiver/lib/deceiver.js") }
];
try {
    for (const file of copyfiles)
        fs_1.default.copyFileSync(file.dir, file.target);
    status = true;
}
catch (e) {
    console.warn(e);
}
class Patch {
    static status() {
        return status;
    }
}
exports.default = Patch;
