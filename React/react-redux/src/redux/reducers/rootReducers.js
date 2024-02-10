import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import itemReducer from "./itemReducers";

const rootReducer= combineReducers({
    counter:counterReducer,
    item:itemReducer
})

export default rootReducer;