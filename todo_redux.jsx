import React from "react";
import ReactDOM from "react-dom";
import configureStore from './frontend/store/store'

import { receiveTodo, receiveTodos } from "./frontend/actions/todo_actions" 

document.addEventListener("DOMContentLoaded", ()=>{
    
    const newTodos = [{
        id: 1,
        title: "crash car",
        body: "throw out soap",
        done: true
      },
      {
        id: 2,
        title: "wash cat",
        body: "with soap",
        done: true
      },
      {
        id: 3,
        title: "watch the car",
        body: "with dr pepper",
        done: false
      } ]
      window .newTodos = newTodos;
    window.store = configureStore;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
      
    ReactDOM.render(
        <h1>Todos App</h1>,
        document.getElementById("root")
    );
});