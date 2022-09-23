"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizing_1 = __importDefault(require("./api/resizing"));
var routes = express_1.default.Router();
routes.use('/api', resizing_1.default);
exports.default = routes;
