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
  const new_file_name = `${width}_${height}_${file_name}`;
  if (fs.existsSync(path.join(root_path, 'caching', new_file_name))) {
    res
      .status(200)
      .redirect(`${process.env.ROOT_URL}/caching/${new_file_name}`);
  } else {
    next();
  }
};

export default cachingChecking;
