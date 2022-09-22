import express from 'express';
import errorHandling from './middlewares/error';

const app = express();
const port = 3000;

// app.use(authRoutes);
// app.use(userRoutes);

app.use(errorHandling);

app.listen(port, () => {
  console.log(`server is listening now on http://localhost:${port}`);
});

export default app;
