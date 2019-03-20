import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(req.path);
});

/* later these need to be protected routes */
router.get('/protected', (req, res) => {
  res.send(req.path);
});

export default router;
