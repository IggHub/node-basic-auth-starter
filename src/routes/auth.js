import {Router} from 'express';
import users from '../models/users.json';
import JWT from 'jsonwebtoken';

const router = Router();
const jwtSecret = process.env.JWT_SECRET;

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  const foundUser = users.find((user) => (user.email == email && user.password === password))
  if (foundUser){
    const payload = (({ username, email }) => ({ username, email }))(foundUser);
    const token = JWT.sign(payload, jwtSecret);
    console.log('Token: ', token);
    res.cookie('access_token', token, 30000); //30000 ms
    res.status(302).redirect('/');
  } else {
    console.log('failed login');
    res.status(500).redirect('/auth/login');
  }  
});

router.get('/register', (req, res) => {
  res.send('register');
});

export default router;
