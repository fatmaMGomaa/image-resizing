import express from 'express';
import { postResizingImage } from '../../controllers/api/resizing';
import cachingChecking from '../../middlewares/caching';
import existingChecking from '../../middlewares/existing';

const resizingRouter = express.Router();

resizingRouter.get(
  '/resizing',
  [existingChecking, cachingChecking],
  postResizingImage
);

export default resizingRouter;
