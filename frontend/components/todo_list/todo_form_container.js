import { connect } from "react-redux";

//import { receiveTodo } from "../../actions/todo_actions";
import TodoForm from "./todo_form";

const mapStateToProps = state => {
    debugger
    return {};
};

const mapDispatchToProps = dispatch => {
    debugger
    return {
        addTodo: (todo) => {
            dispatch( receiveTodo(todo) )
        }
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( TodoForm );