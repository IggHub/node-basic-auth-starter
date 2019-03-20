import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import hbs from 'hbs';
import path from 'path';

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/users', routes.users);
app.use('/auth', routes.auth);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('index');
});
