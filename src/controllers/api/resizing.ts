import { Request, Response, NextFunction } from 'express';
import path from 'path';
import sharp from 'sharp';

export const postResizingImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const error = new Error("something went wrong");
    // error.code = 404;
    // throw error;
    const file_name = req.query.file_name as string;
    const width: number = parseInt(req.query.width as string);
    const height: number = parseInt(req.query.height as string);
    const root_path = path.join(__dirname, '../../../', 'public');
    const new_file_name = `${width}_${height}_${file_name}`;

    sharp(path.join(root_path, 'images', file_name))
      .resize(width, height)
      .toFile(path.join(root_path, 'caching', new_file_name))
      .then(() => {
        res
          .status(200)
          .redirect(`${process.env.ROOT_URL}/caching/${new_file_name}`);
      });
  } catch (error) {
    next(error);
  }
};
