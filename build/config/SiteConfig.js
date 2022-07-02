"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SiteConfig {
    NAME = "SrRapero720";
    URL;
    PATH;
    ERR;
    constructor(url, path, err) {
        this.URL = url;
        this.PATH = path;
        this.ERR = err;
    }
}
exports.default = SiteConfig;
