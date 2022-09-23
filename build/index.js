"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var error_1 = __importDefault(require("./middlewares/error"));
var app = (0, express_1.default)();
var port = 3000;
// app.use(userRoutes);
app.use(error_1.default);
app.listen(port, function () {
    console.log("server is listening now on http://localhost:".concat(port));
});
exports.default = app;
