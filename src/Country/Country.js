import React from "react";

const Country = (props) => {
    return (
        <div className={props.class}>
            <span>{props.name}</span>
        </div>
    );
}
export default Country;