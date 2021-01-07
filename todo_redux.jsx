import React from "react";
import ReactDOM from "react-dom";
import store from './frontend/store/store';

import Root from "./frontend/components/root";
import App from "./frontend/components/app";

// import { receiveTodo, receiveTodos } from "./frontend/actions/todo_actions" 

document.addEventListener("DOMContentLoaded", ()=>{
    
    // const newTodos = [{
    //     id: 1,
    //     title: "crash car",
    //     body: "throw out soap",
    //     done: true
    //   },
    //   {
    //     id: 2,
    //     title: "wash cat",
    //     body: "with soap",
    //     done: true
    //   },
    //   {
    //     id: 3,
    //     title: "watch the car",
    //     body: "with dr pepper",
    //     done: false
    //   } ]
    //   window .newTodos = newTodos;
    // window.store = store;
    // window.receiveTodo = receiveTodo;
    // window.receiveTodos = receiveTodos;
      
    ReactDOM.render(
        <Root store={store} />,
        document.getElementById("root")
    );
});