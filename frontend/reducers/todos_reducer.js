import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

const todosReducer = ( state = {}, action ){
    Object.freeze(state);

    switch (action.type){

        case RECEIVE_TODO:
            const newState = {};
            Object.assign(newState, state);
            newState[action.todo.id] = action.todo;
            return newState;
        break;

        case RECEIVE_TODOS:
            const newState = {};
            Object.assign(newState, state);
            action.todos.forEach(todo => {
                newState[todo.id] = todo;
            });
            return newState;
        break;

        default: return state;
    }

}

export default todosReducer;