import {Router} from 'express';
import users from '../models/users.json';
import JWT from 'jsonwebtoken';

const router = Router();
const jwtSecret = process.env.JWT_SECRET;

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  const foundUser = users.find((user) => (user.email == email && user.password === password))
  if (foundUser){
    const payload = (({ username, email }) => ({ username, email }))(foundUser);
    const token = JWT.sign(payload, jwtSecret);
    res.cookie('access_token', token, 30000); //30000 ms
    res.send('login');
  } else {
    res.sendStatus(500);
  }  
});

router.get('/register', (req, res) => {
  res.send('register');
});

export default router;
