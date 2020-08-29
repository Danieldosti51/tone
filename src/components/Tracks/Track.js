import React from "react";
import "../../App.css"

import { deleteTrack } from "../../services/track-service";
import { getUsername } from '../../services/auth-service'

const Track = ({ name, url, description, username, id }) => (
    <div className="product card">
        <div className="card-body">
            {getUsername() === username &&
            <button className="icon-button delete-button" onClick={() => deleteTrack(id)}><i className="fas fa-trash-alt" /></button>}
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{username}</small></p>
        </div>
    </div>
)

export default Track;