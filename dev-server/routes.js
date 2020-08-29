import trackRoutes from './api/track/track-routes';
import authRoutes from './api/auth/auth-routes';
import regRoutes from './api/register/register-routes';
import userRoutes from './api/user/user-routes';

export function registerRoutes(app) {
    app.use('/api', trackRoutes);
    app.use('/api', authRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes);
}