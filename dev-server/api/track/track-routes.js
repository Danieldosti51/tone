import express from 'express';
import * as controller from './track-controller';
import * as auth from '../../services/auth-service';

const router = express.Router();

router.post('/track', auth.requireLogin, controller.create);
router.get('/track', auth.requireLogin, controller.index);
router.get('/track/:id', auth.requireLogin, controller.show);
router.put('/track', auth.requireLogin, controller.update);
router.delete('/track/:id', auth.requireLogin, controller.remove);

export default router;