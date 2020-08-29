import React from "react";

import Track from './Track';
import {useSelector} from "react-redux";
import {getAllTracks} from "../../store/slices/tracks";

function TrackList() {
    const tracks = useSelector(getAllTracks);

    return (
        <main role="main">
            <article className="products">
                <div className="card-columns">
                    {tracks.map(track => <Track name={track.name} description={track.description}
                                                url={track.url} username={track.user.username}
                                                id={track._id} />)}
                </div>
            </article>
        </main>
    )
}

export default TrackList;