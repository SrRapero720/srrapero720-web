//TASKS
import Patch from "./tasks/Patch";

// LIBRERIAS
import "sr-console";
import express from "express";
import spdy from "spdy";
import path from "path";

// CONFIG
import SpdyConfig from "./config/SpdyConfig";
import ServerConfig from "./config/ServerConfig";

// MODELOS
import StartBuilder from "./models/core/StartBuilder";

// RUTAS
import MainRoutes from "./routes/Main.Routes";

// STATUS TASK
if (Patch.status()) console.info("Modulos parchados"); else console.err("No se pudo parchar el modulo");

// INSTANCIAS
const app = express();
const server = spdy.createServer(new SpdyConfig(), app);

// CONFIG
app.set("view engine", "ejs");
app.set("trust proxy", ['loopback', 'linklocal', 'uniquelocal']);
app.set("views", path.join(process.cwd(), "static/views"));
app.use(express.static(path.join(process.cwd(), "static/public")));
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.text({ limit: "8mb" }));
// if (process.env.STATIC_PATH) app.use("node-static", express.static(process.env.STATIC_PATH));
app.enable("verbose errors");

// RUTAS
app.use(MainRoutes.getRoutes());

const net = server.listen(ServerConfig.PORT, ServerConfig.ADDRESS, () => {
    console.success(new StartBuilder(net.address()));
});