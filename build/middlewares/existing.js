"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var existingChecking = function (req, res, next) {
    var file_name = req.query.file_name;
    var image_path = path_1.default.join(__dirname, '../../', 'public', 'images', file_name);
    if (fs_1.default.existsSync(image_path)) {
        next();
    }
    else {
        res.status(404).json({ message: 'Image is not existing' });
    }
};
exports.default = existingChecking;
