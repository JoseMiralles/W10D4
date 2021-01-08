import React from "react";

import TodoListItem from "./todo_list_item";
import TodoForm from "../todo_list/todo_form";

export default (props) => {

    const mappedItems = props.todos.map((todo) =>
        <TodoListItem key={todo.id} todo={todo} />
    );

    return (
        <>
            <TodoForm />
            <ul>
                {mappedItems}
            </ul>
        </>
    );
}