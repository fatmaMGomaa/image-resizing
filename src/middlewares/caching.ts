import express from 'express';
import path from 'path';
import fs from 'fs';

const cachingChecking = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const file_name: string = req.query.file_name as string;
  const width: string = req.query.width as string;
  const height: string = req.query.height as string;
  const root_path = path.join(__dirname, '../../', 'public');
  const cached_file_path: string = path.join(
    root_path,
    'caching',
    `${width}_${height}_${file_name}`
  );
  if (fs.existsSync(cached_file_path)) {
    res.sendFile(cached_file_path);
  } else {
    next();
  }
};

export default cachingChecking;
