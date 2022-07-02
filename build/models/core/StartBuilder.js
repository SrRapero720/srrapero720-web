"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StartBuilder extends String {
    static DEFAULT_MESSAGE_FULL = `==== SERVIDOR INICIADO ====
    HOSTNAME: %host%
    IP/FAMILY: %ipv%
    PUERTO: %port%
    RAM INICIAL: %ram%MB
    DISCORD: [
        USUARIO: %discord%
        SERVIDORES: %discord_guild%
        ESTADO: %discord_status%
    ]
`;
    static DEFAULT_MESSAGE_EMPTY = "=== SERVIDOR INICIADO: No se encontro informacion del Address";
    constructor(info) {
        super(typeof info === "object" && info !== null
            ? StartBuilder.DEFAULT_MESSAGE_FULL
                .replace(/%host%/gi, info.address)
                .replace(/%ipv%/gi, info.family)
                .replace(/%port%/gi, info.port.toString())
                .replace(/%ram%/gi, console.memory.toString())
            : typeof info === "string"
                ? info
                : StartBuilder.DEFAULT_MESSAGE_EMPTY);
    }
}
exports.default = StartBuilder;
