import React from "react";
import { useDispatch } from "react-redux";

import userSlice from "../../store/slices/user";
import { toggleBackdrop } from "../../services/ui-service";

function Navbar() {
    const dispatch = useDispatch();
    
    function logOut() {
        dispatch(userSlice.actions.logout());
        localStorage.removeItem('token');
    }

    return (
        <nav className="navbar navbar-dark justify-content-between">
            <div className="container-fluid">
                <span className="item navbar-brand">tone.</span>
                <div className="right-nav navbar-nav flex-row">
                    <button className="add icon-button nav-item" onClick={toggleBackdrop}><i className="fas fa-plus" /></button>
                    <button className="icon-button nav-item" ><i className="fas fa-cog" /></button>
                    <button className="icon-button nav-item" onClick={logOut}>sign out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;