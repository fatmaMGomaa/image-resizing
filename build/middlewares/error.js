"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandling = function (error, req, res, next) {
    console.log(error);
    // const code: string | undefined = error.code;
    // const statusCode: number = code === undefined ? 500 : parseInt(code);
    var statusCode = error.code || 500;
    var message = error.message;
    res.status(statusCode).json({ message: message, statusCode: statusCode });
    next();
};
exports.default = errorHandling;
