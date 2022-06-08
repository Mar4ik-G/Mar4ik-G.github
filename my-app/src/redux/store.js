import {combineReducers, createStore} from "redux";
import resumeInfoReducer from "./reducers/resumeInfoReducer";
import adminReducer from "./reducers/adminReducer";

const rootReducer = combineReducers({
    resumeInfoReducer:resumeInfoReducer,
    adminReducer:adminReducer,
})

export const store = createStore(rootReducer);