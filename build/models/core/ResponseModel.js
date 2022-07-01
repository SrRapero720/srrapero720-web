"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseModel {
    status;
    message;
    content;
    constructor(s, m, c) {
        this.status = s;
        this.message = m;
        this.content = c;
    }
}
exports.default = ResponseModel;
