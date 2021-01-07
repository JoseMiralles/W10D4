import React from "react";

import TodoListItem from "./todo_list_item";

export default (props) => {

    const mappedItems = props.todos.map((todo) =>
        <TodoListItem todo={todo} />
    );

    return (
        <ul>
            {mappedItems}
        </ul>
    );
}