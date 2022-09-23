import express from 'express';

interface Error {
  message: string;
  status?: number;
  code?: number;
}

const errorHandling = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(error);
  // const code: string | undefined = error.code;
  // const statusCode: number = code === undefined ? 500 : parseInt(code);
  const statusCode: number = error.code || 500;
  const message: string = error.message;
  res.status(statusCode).json({ message });
  next();
};

export default errorHandling;
