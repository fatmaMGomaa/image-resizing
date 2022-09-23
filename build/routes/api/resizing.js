"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizing_1 = require("../../controllers/api/resizing");
var resizingRouter = express_1.default.Router();
resizingRouter.get('/resizing', resizing_1.postResizingImage);
exports.default = resizingRouter;
