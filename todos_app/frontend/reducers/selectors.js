export const allTodos = (state) => {
    return Object.keys(state.todos).map((todoKey) => {
        return state.todos[todoKey];
    });
}