import React from "react";


const ToDoItem = (props) => {
    return (
        <div className="ToDo mt-2">
            <button className="btn btn-danger" onClick={props.delete}>x</button>
            <button type="button" className="btn btn-primary " onClick={props.edit} disabled={props.isDisabled}>edit</button>
            <input className="ml-2" type="checkbox" checked={props.checked} onChange={props.done} />
            <span className={" ml-2 toDoItem " + props.lineth}> {props.toDo} </span>
        </div>
    )
}

export default ToDoItem;