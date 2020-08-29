import { http } from './http-service';

export function getTracks() {
    return http().get('/track');
}

export function getTrackById(id) {
    return http().get(`/track/${id}`);
}

export function createTrack(e, name, url, description) {
    e.preventDefault();
    const newTrack = {
        name: name,
        url: url,
        description: description
    }
    window.location.reload();
    return http().post('/track', newTrack);
}

export function deleteTrack(id) {
    return http().delete(`/track/${id}`);
}

export function updateTrack(track) {
    return http().put('/track', track);
}