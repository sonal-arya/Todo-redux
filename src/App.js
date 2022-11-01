import React from "react";
import "./App.css";
import Input from "./components/input";
import TodoItems from "./components/TodoItems";
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/todoSlice'
function App() {
  const todoList = useSelector(selectTodoList )
  return (
    <div className="app">
      <div className="app_container">
      <h3>TODO list</h3>
        <div className="app_todoContainer">
      
          {
            todoList.map(item => (
              <TodoItems name={item.item}
              done={item.done}
              id={item.id}/>
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
