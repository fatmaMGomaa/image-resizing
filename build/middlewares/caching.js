"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var cachingChecking = function (req, res, next) {
    var file_name = req.query.file_name;
    var width = req.query.width;
    var height = req.query.height;
    var root_path = path_1.default.join(__dirname, '../../', 'public');
    var cached_file_path = path_1.default.join(root_path, 'caching', "".concat(width, "_").concat(height, "_").concat(file_name));
    if (fs_1.default.existsSync(cached_file_path)) {
        res.sendFile(cached_file_path);
    }
    else {
        next();
    }
};
exports.default = cachingChecking;
