import express from 'express';
import resizingRouter from './api/resizing';

const routes = express.Router();

routes.use('/api', resizingRouter);
export default routes;
