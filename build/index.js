"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Patch_1 = __importDefault(require("./tasks/Patch"));
require("sr-console");
const express_1 = __importDefault(require("express"));
const spdy_1 = __importDefault(require("spdy"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const express_minify_1 = __importDefault(require("express-minify"));
const SpdyConfig_1 = __importDefault(require("./config/SpdyConfig"));
const ServerConfig_1 = __importDefault(require("./config/ServerConfig"));
const StartBuilder_1 = __importDefault(require("./models/core/StartBuilder"));
const Main_Routes_1 = __importDefault(require("./routes/Main.Routes"));
const Err_Routes_1 = __importDefault(require("./routes/Err.Routes"));
if (Patch_1.default.status())
    console.info("Modulos parchados");
else
    console.err("No se pudo parchar el modulo");
const app = (0, express_1.default)();
const server = spdy_1.default.createServer(new SpdyConfig_1.default(), app);
app.set("view engine", "ejs");
app.set("trust proxy", ['loopback', 'linklocal', 'uniquelocal']);
app.set("views", path_1.default.join(process.cwd(), "static/views"));
app.use((0, compression_1.default)({ level: 9 }));
app.use((0, express_minify_1.default)({ cache: path_1.default.join(process.cwd(), "static/cache") }));
app.use(express_1.default.static(path_1.default.join(process.cwd(), "static/public")));
if (process.env.STATIC_PATH)
    app.use("/node-static", express_1.default.static(path_1.default.join(process.env.STATIC_PATH)));
app.use(express_1.default.json({ limit: "100mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use(express_1.default.text({ limit: "8mb" }));
app.enable("verbose errors");
app.use(Main_Routes_1.default.getRoutes());
app.use(Err_Routes_1.default.getRoutes());
const net = server.listen(ServerConfig_1.default.PORT, ServerConfig_1.default.ADDRESS, () => {
    console.success(new StartBuilder_1.default(net.address()));
});
