"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResizingImage = void 0;
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var postResizingImage = function (req, res, next) {
    try {
        // const error = new Error("something went wrong");
        // error.code = 404;
        // throw error;
        var file_name = req.query.file_name;
        var width = parseInt(req.query.width);
        var height = parseInt(req.query.height);
        var root_path = path_1.default.join(__dirname, '../../../', 'public');
        var new_file_name_1 = "".concat(width, "_").concat(height, "_").concat(file_name);
        (0, sharp_1.default)(path_1.default.join(root_path, 'images', file_name))
            .resize(width, height)
            .toFile(path_1.default.join(root_path, 'caching', new_file_name_1))
            .then(function () {
            res
                .status(200)
                .redirect("".concat(process.env.ROOT_URL, "/caching/").concat(new_file_name_1));
        });
    }
    catch (error) {
        next(error);
    }
};
exports.postResizingImage = postResizingImage;
