import React, { useState } from 'react';
import './App.css';
import ToDoItem from "./ToDoItem/ToDoItem.js";

const App = () => {

  const state = {
    ToDoList: [
      {
        id: 1,
        todoName: "Get up early",
        isDeleted: false,
        isDone: false
      },
      {
        id: 2,
        todoName: "Learn React.js",
        isDeleted: false,
        isDone: false
      },
      {
        id: 3,
        todoName: "Go to sleep early",
        isDeleted: false,
        isDone: false
      }
    ]
  }

  const [ToDoList, SetToDoList] = useState(state.ToDoList);
  const [ToDoInput, SetToDoInput] = useState('');
  const [isEditMode, SetEditMode] = useState(false);
  const [EditId, SetEditId] = useState(0);


  const DeleteHandler = (id) => {
    const list = [...ToDoList];
    const item = list.filter(x => x.id === id)[0];
    item.isDeleted = true;
    console.log(list);
    SetToDoList(list);
  }

  const AddHandler = () => {
    if (ToDoInput != "") {
      const list = [...ToDoList];
      const id = ToDoList[ToDoList.length - 1].id;
      const name = ToDoInput;
      const deleted = false;
      const done = false;
      const toDoItem = {
        id: (id + 1),
        todoName: name,
        isDeleted: deleted,
        isDone: done
      }
      list.push(toDoItem);
      SetToDoList(list);
    }
    SetToDoInput("");
  }

  const EditHandler = (id) => {
    const list = [...ToDoList];
    const item = list.filter(x => x.id === id)[0];

    SetEditMode(true);
    SetEditId(id);

    // if (ToDoInput == "") {
    SetToDoInput(item.todoName);
    // }
    // else {
    //   list.filter(x => x.id === id)[0].todoName = ToDoInput;
    //   SetToDoList(list);
    //   SetToDoInput("");
    // }
  }

  const CheckboxHandler = (id) => {
    const list = [...ToDoList];
    const item = list.filter(x => x.id === id)[0];
    item.isDone = !item.isDone;
    console.log(list);
    SetToDoList(list);
  }

  const SaveHandler = (id) => {
    if (id != 0) {
      const list = [...ToDoList];
      let item = list.filter(x => x.id == id)[0];
      item.todoName = ToDoInput;
      SetToDoList(list);
      SetToDoInput("");
    }
    SetEditMode(false);
  }

  const CancelHandler = () => {
    SetEditMode(false);
    SetToDoInput("");
  }

  let btn;
  let cancel;
  if (isEditMode && ToDoInput != "") {
    btn = <button className="btn btn-danger" onClick={id => SaveHandler(EditId)}>Save</button>
    cancel = <button className="btn btn-primary" onClick={CancelHandler}>Cancel</button>
  }
  else {
    btn = <button className="btn" onClick={AddHandler}>Add</button>;
  }

  return (
    <div className="App" >
      <h1>To Do List</h1>
      <br />
      <input type="text" onChange={event => SetToDoInput(event.target.value)} value={ToDoInput} />

      {btn}
      {cancel}

      {ToDoList.filter(x => !x.isDeleted).map((item, key) => {
        let lineth = "";
        let checked = "";
        let editable = "";
        if (item.isDone) {
          lineth = "toDoItemDone";
          checked = "checked";
          editable = "disabled"
        }
        return <ToDoItem
          toDo={item.todoName}
          key={key}
          delete={() => DeleteHandler(item.id)}
          edit={() => EditHandler(item.id)}
          done={() => CheckboxHandler(item.id)}
          lineth={lineth}
          checked={checked}
          isDisabled={editable}
          
        />
      })}

    </div>
  )

}

export default App;
