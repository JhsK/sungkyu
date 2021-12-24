import * as dotenv from 'dotenv';
import express from 'express';
import { sequelize } from './models';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3001;
const HOST: string = process.env.HOST || 'localhost';
const app = express();

// sequelize
//   .sync()
//   .then(() => {
//     console.log('db 연결 성공');
//   })
//   .catch(console.error);

app.get('/', (req, res) => {
  res.send('hello node');
});

app.listen(PORT, HOST, async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log('db 연결 성공');
    })
    .catch((e) => {
      console.log(e);
    });
});
