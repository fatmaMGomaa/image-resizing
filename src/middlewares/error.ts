import express from 'express';

const errorHandling = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(error);
  // const statusCode: number = error.statusCode || 500;
  const message: string = error.message;
  res.status(500).json({ message });
};

export default errorHandling;
