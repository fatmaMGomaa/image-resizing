"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/api', function (req, res) {
    res.send("Hello from Wesky");
});
app.listen(port, function () {
    console.log("server is listening now on http://localhost:".concat(port));
});
// export const myFunc = (num: number): number => {return num*5}
exports.default = app;
