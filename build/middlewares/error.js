"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandling = function (error, req, res, next) {
    console.log(error);
    // const statusCode: number = error.statusCode || 500;
    var message = error.message;
    res.status(500).json({ message: message });
};
exports.default = errorHandling;
