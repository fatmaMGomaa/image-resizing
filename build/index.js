"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var index_1 = __importDefault(require("./routes/index"));
var error_1 = __importDefault(require("./middlewares/error"));
var app = (0, express_1.default)();
dotenv_1.default.config();
var port = process.env.PORT;
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
app.use('/images', index_1.default);
app.use(error_1.default);
app.listen(port, function () {
    console.log("server is listening now on http://localhost:".concat(port));
});
exports.default = app;
