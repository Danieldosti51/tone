import jwt from 'jsonwebtoken';

export function generateJWT(user) {
    const tokenData = { username: user.username, id: user._id };
    return jwt.sign({ user: tokenData }, process.env.TOKEN_SECRET);
}

export function getUsername(req) {
    const token = decodeToken(req);
    return !token ? null : token.user.username;
}

export function getUserId(req) {
    const token = decodeToken(req);
    return !token ? null : token.user.id;
}

export function requireLogin(req, res, next) {
    const token = decodeToken(req);
    if (!token) {
        return res.status(401).json({ message: 'You need to be logged in to do that!' });
    }
    next();
}

export function decodeToken(req) {
    const token = req.headers.authorization || req.headers['authorization'];

    if (!token) {
        return null;
    }

    try {
        try {
            return jwt.verify(JSON.parse(token), process.env.TOKEN_SECRET);
        } catch (err) {
            return jwt.verify(token, process.env.TOKEN_SECRET);
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}