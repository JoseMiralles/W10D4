import { connect } from "react-redux";

import { receiveTodo } from "../../actions/todo_actions";
import TodoForm from "./todo_form";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => {
            return dispatch( receiveTodo(todo) )
        }
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( TodoForm );