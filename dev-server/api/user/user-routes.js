import express from 'express';
import * as controller from './user-controller';

const router = express.Router();

router.get('/user', (req, res) => controller.index(req, res));

export default router;