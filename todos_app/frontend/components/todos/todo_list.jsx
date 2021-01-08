import React from "react";

import TodoListItem from "./todo_list_item";
import TodoFormContainer from "../todo_list/todo_form_container";

export default (props) => {

    const mappedItems = props.todos.map((todo) =>
        <TodoListItem key={todo.id} todo={todo} />
    );

    return (
        <>
            <TodoFormContainer/>
            <ul>
                {mappedItems}
            </ul>
        </>
    );
}