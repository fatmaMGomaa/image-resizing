import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/index';
import errorHandling from './middlewares/error';

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, '../', 'public')));
app.use('/images', routes);
app.use(errorHandling);

app.listen(port, () => {
  console.log(`server is listening now on http://localhost:${port}`);
});

export default app;
