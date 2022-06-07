import {combineReducers, createStore} from "redux";
import resumeInfoReducer from "./reducers/resumeInfoReducer";

const rootReducer = combineReducers({
    resumeInfoReducer:resumeInfoReducer,
})

export const store = createStore(rootReducer);