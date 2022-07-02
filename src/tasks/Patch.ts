//LIBRARY
import path from "path";
import fs from "fs";

//DIRS
const node_modules = path.join(process.cwd(), '/node_modules');
const dump = path.join(process.cwd(), "/static/dump");
let status = false;

// FILES
const copyfiles = [
    { dir: path.join(dump, "deceiver.js"), target: path.join(node_modules, "http-deceiver/lib/deceiver.js") }
]

try {
    for (const file of copyfiles) fs.copyFileSync(file.dir, file.target);
    status = true;
} catch (e) { console.warn(e); }

export default class Patch {
    public static status(): boolean {
        return status;
    }
}