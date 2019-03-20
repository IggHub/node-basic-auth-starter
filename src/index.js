import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/users', routes.users);
app.use('/auth', routes.auth);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello root!');
});
