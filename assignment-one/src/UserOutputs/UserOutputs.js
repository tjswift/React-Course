import React from 'react';

import "./UserOutputs.css"
const UserOutputs = (props) => {
    return(
    <div className="style">
        <p>
            Username: {props.username}
        </p>
    </div>
    )};

export default UserOutputs;