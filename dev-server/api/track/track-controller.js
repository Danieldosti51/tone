import Track from '../../model/track-model'
import User from '../../model/user-model';
import * as auth from '../../services/auth-service';

export function index(req, res) {
    Track.find({}, (error, tracks) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ tracks: tracks });
    }).populate('user', 'username', 'user');
}

export function create(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id },  (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const newTrack = {
            name: req.body.name,
            url: req.body.url,
            description: req.body.description
        }
        const track = new Track(newTrack);
        track.user = user._id;

        track.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json({message: "Track successfully uploaded!"});
        });
    });
}

export function update(req, res) {
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        } if (!user) {
            return res.status(404).json();
        }

        const track = new Track(req.body.product);
        track.user = user._id;
        Track.findByIdAndUpdate({ _id: track.id }, track, error => {
            if (error) {
                return res.status(500).json();
            }
            if (track.user._id.toString() !== id) {
                return res.status(403).json({ message: 'Cannot update another user\'s track.'});
            }
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    const id = auth.getUserId(req);

    Track.findOne({ _id: req.params.id }, (error, track) => {
        if(error) {
            return res.status(500).json();
        }
        if (!track) {
            return res.status(404).json();
        }
        if (track.user._id.toString() !== id) {
            return res.status(403).json({ message: 'Cannot delete another user\'s track.'});
        }
        Track.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        })
    });
}

export function show(req, res) {
    Track.findOne({ _id: req.params.id }, (error, track) => {
        if (error) {
            return res.status(500).json();
        } else if (!track) {
            return res.status(404).json();
        }
        return res.status(200).json({ product: track });
    });
}