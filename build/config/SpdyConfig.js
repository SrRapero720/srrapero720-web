"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpdyConfig {
    spdy = {
        protocols: ["h2", "spdy/3.1", "http/1.1"],
        plain: true,
        connection: {
            windowSize: 1920 * 1080,
            autoSpdy31: true
        }
    };
}
exports.default = SpdyConfig;
