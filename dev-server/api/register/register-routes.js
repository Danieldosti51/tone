import express from 'express';
import * as controller from './register-controller';

const router = express.Router();

router.post('/register', (req, res) =>  controller.index(req, res));

export default router;