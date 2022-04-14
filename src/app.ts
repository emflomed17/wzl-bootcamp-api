import express, { Application, Request, Response } from 'express';

import btcRouter from './routes/currencies/btc';

const app: Application = express();

app.get('/api/v1/', (req: Request, res: Response) => {
  console.log(`Request ${req.method}`);
  res.status(200).send('Hello World')
});

app.use('/api/v1/btc', btcRouter);

const PORT = process.env.PORT || 5002;

app.listen(
  PORT,
  () => console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);