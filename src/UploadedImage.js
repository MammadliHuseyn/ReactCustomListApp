import React from "react";

let GetImage = (props) => {
    return <div className="uploaded-files">
        <img className="mr-2" src={props.src} height="100" alt="preview"/>
        <button className="btn-delete" onClick={props.delete}>x</button>
    </div>
}

export default GetImage;