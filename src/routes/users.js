import {Router} from 'express';

// for now, fake json users would suffice
import users from '../models/users.json';
const router = Router();

router.get('/', (req, res) => {
  console.log(users);
  res.send(req.path);
});

/* later these need to be protected routes */
router.get('/protected', (req, res) => {
  res.send(req.path);
});

export default router;
