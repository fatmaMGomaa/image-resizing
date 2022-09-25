import { Request, Response, NextFunction } from 'express';
import generateSize from '../../utilities/generateSize';

export const postResizingImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      typeof req.query.width === 'string' &&
      typeof req.query.height === 'string' &&
      !isNaN(parseInt(req.query.width as string)) &&
      !isNaN(parseInt(req.query.height as string))
    ) {
      const file_name = req.query.file_name as string;
      const width: number = parseInt(req.query.width as string);
      const height: number = parseInt(req.query.height as string);

      (async () => {
        const new_file_path = await generateSize(width, height, file_name);
        res.sendFile(new_file_path);
      })();
    } else {
      throw new Error('Invalid width or height Params');
    }
  } catch (error) {
    next(error);
  }
};
