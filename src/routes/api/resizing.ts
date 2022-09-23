import express from 'express';
import { postResizingImage } from '../../controllers/api/resizing';

const resizingRouter = express.Router();

resizingRouter.get('/resizing', postResizingImage);

export default resizingRouter;
