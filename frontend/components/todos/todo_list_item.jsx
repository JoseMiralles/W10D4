import React from "react";

const TodoListItem = (props) => {
    return(
    <li key={props.todo.id}>
        <strong>{props.todo.title}</strong>
        <p>{props.todo.body}</p>
    </li>
    )
}

export default TodoListItem;