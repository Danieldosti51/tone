import React, { useState } from "react";

import { toggleBackdrop } from "../../services/ui-service";
import { createTrack } from "../../services/track-service";
import Form from "../Form";
import Input from "../Login/Input";


function Backdrop() {

    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="backdrop" onClick={toggleBackdrop}>
            <div className="container d-flex flex-column justify-content-center vh-100">
                <Form className="backdrop-container" onSubmit={(e) => createTrack(e, name, url, description)}>
                    <Input label="Song name" id='name' observer={(e) => setName(e.target.value)} />
                    <Input label="URL (Optional)" id='url' observer={(e) => setUrl(e.target.value)} />
                    <Input label="Describe the song" id='description' observer={(e) => setDescription(e.target.value)} />
                    <button type="submit" className="form-button">Add</button>
                </Form>
            </div>
        </div>
    )
}

export default Backdrop;