import express from 'express';
import path from 'path';
import fs from 'fs';

const existingChecking = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const file_name: string = req.query.file_name as string;
  const image_path = path.join(
    __dirname,
    '../../',
    'public',
    'images',
    file_name
  );
  if (fs.existsSync(image_path)) {
    next();
  } else {
    res.status(404).send('Image is not existing');
  }
};

export default existingChecking;
