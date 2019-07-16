import React from 'react';

const UserInputs = (props) => {

    const style = {
        border: '2px solid blue'
    }
    return(
    <div>
        <input 
            type="text" 
            onChange={props.change}
            value={props.currentName}
            style={style}/>
    </div>
    )};

export default UserInputs;