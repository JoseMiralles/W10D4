import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions"



const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };



const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type){

        case RECEIVE_TODO:
            newState = {};
            Object.assign(newState, state);
            newState[action.todo.id] = action.todo;
            return newState;
        break;

        case RECEIVE_TODOS:
            newState = {};
            // Object.assign(newState, state);
            action.todos.forEach(todo => {
                newState[todo.id] = todo;
            });
            return newState;
        break;

        default: return state;
    }

}

export default todosReducer;

