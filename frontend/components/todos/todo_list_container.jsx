import React from "react";
import { connect } from "react-redux";

import TodoList from "./todo_list";
import {allTodos} from "../../reducers/selectors";
import { receiveTodos } from "../../actions/todo_actions";

const mapStateToProps = ( state ) => {
    return { todos: allTodos(state) };
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);