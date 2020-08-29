import { StringUtils } from "../../services/string-util";
import User from '../../model/user-model';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.valid) {
        return res.status(400).json({ message: validation.message });
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(error => {
        if (error) {
            if (error.code === 11000) {
                return res.status(403).json({ message: 'Username already taken' });
            }
            return res.status(500).json();
        }
        return res.status(201).json({ message: 'User successfully created!' });
    });
}

function validateIndex(body) {
    if (StringUtils.isEmpty(body.username) || StringUtils.isEmpty(body.password) || StringUtils.isEmpty(body.confirmPassword)) {
        return {
            valid: false,
            message: 'All fields must be filled.'
        }
    } else if (body.password !== body.confirmPassword) {
        return {
            valid: false,
            message: 'Passwords do not match.'
        }
    }
    return {
        valid: true
    }
}