import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import trackSlice from "../../store/slices/tracks"
import Navbar from "./Navbar";
import Backdrop from "./Backdrop";
import TrackList from "./TrackList";
import { hasBackdrop } from "../../store/slices/ui";
import { getTracks } from "../../services/track-service";
import { CSSTransition } from "react-transition-group";

function TrackApp() {
    const dispatch = useDispatch();
    const willCreate = useSelector(hasBackdrop);

    useEffect(() => {
        getTracks().then( res => dispatch(trackSlice.actions.setTracks(res.data.tracks.reverse())) );
    }, [dispatch])

    return (
        <div className="app-content">
            <Navbar />
            <TrackList />
            <CSSTransition in={willCreate} timeout={200} classNames="backdrop" unmountOnExit>
                <Backdrop/>
            </CSSTransition>
        </div>
    )
}

export default TrackApp;