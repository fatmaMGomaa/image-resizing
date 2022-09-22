import { ErrorRequestHandler } from 'express';

const errorHandling: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  const statusCode: number = error.statusCode || 500;
  const message: string = error.message;
  res.status(statusCode).json({ message });
};

export default errorHandling;
