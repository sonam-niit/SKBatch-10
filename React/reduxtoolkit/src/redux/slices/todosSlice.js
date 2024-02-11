import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}
const todosSlice= createSlice({
    name:'todos',
    initialState,
    reducers:{
        addtodo(state,action){
            state.todos.push(action.payload);
        },
        toggleTodo(state,action){
            const todo= state.todos.find((item)=>item.id===action.payload);
            if(todo){
                todo.completed=!todo.completed
            }
        },
        removeTodo(state,action){
            state.todos= state.todos.filter((item)=>item.id!==action.payload);
        }
    }
})
export const {addtodo,toggleTodo,removeTodo}= todosSlice.actions;
export const todoReducer= todosSlice.reducer;