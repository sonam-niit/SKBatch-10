import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { todoReducer } from "./todosSlice";
import { userReducer } from "./userSlice";

const rootReducer= combineReducers({
    counter:counterReducer,
    todos:todoReducer,
    userRed:userReducer
})

export default rootReducer;