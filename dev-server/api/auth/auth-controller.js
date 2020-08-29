import { StringUtils } from "../../services/string-util";
import User from '../../model/user-model';
import { generateJWT } from "../../services/auth-service";

export function index(req, res) {
    const fieldsEmpty = validateIndex(req.body);
    if (!fieldsEmpty) {
        return res.status(400).json({ message: 'All fields must be filled' });
    }

    User.findOne({ username: req.body.username }, (error, user) => {
        if (error) {
            return res.status(500).json({ message: 'There was an error with your submission' });
        }

        if (!user) {
            return res.status(401).json({ message: 'That user does not exist' });
        }

        const passwordsMatch = User.checkMatch(req.body.password, user.password);
        if (!passwordsMatch) {
            return res.status(401).json({ message: 'Password does not match' });
        }
        const token = generateJWT(user);
        return res.status(200).json({ token: token });
    });
}

function validateIndex(body) {
    return !(StringUtils.isEmpty(body.username) || StringUtils.isEmpty(body.password));
}
