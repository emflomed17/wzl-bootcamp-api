import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  console.log(`Request ${req.method}`);
  res.status(200).send({ message: 'Welcome to iDoc APIII' })
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  () => console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);