import express from 'express';
import * as controller from'./auth-controller';

const router = express.Router();

router.post('/auth', controller.index);

export default router;