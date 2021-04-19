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

    if (ToDoInput == "") {
      SetToDoInput(item.todoName);
    }
    else {
      list.filter(x => x.id === id)[0].todoName = ToDoInput;
      SetToDoList(list);
      SetToDoInput("");
    }
  }

  const CheckboxHandler = (id) => {
    const list = [...ToDoList];
    const item = list.filter(x => x.id === id)[0];
    item.isDone = !item.isDone;
    console.log(list);
    SetToDoList(list);
  }

  return (
    <div className="App" >
      <h1>To Do List</h1>
      <br />
      <input type="text" onChange={event => SetToDoInput(event.target.value)} value={ToDoInput} />
      <button className="btn" onClick={AddHandler}>add</button>

      {ToDoList.filter(x => !x.isDeleted).map((item, key) => {
        let lineth = "";
        let checked = "";
        if (item.isDone) {
          lineth = "toDoItemDone";
          checked = "checked";
        }
        return <ToDoItem
          toDo={item.todoName}
          key={key}
          delete={() => DeleteHandler(item.id)}
          edit={event => EditHandler(item.id, event.target)}
          done={event => CheckboxHandler(item.id)}
          lineth={lineth}
          checked={checked}
        />
      })}


    </div>
  )

}

export default App;
