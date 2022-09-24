import express from 'express';
import path from 'path';
import fs from 'fs';

const existingChecking = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (typeof req.query.file_name === 'string' && req.query.file_name !== '') {
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
      res.status(404).json({ message: 'Image is not existing' });
    }
  } else {
    res.status(400).json({ message: 'Invaild file_name param' });
  }
};

export default existingChecking;
