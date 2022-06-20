import {applyMiddleware, combineReducers, createStore} from "redux";
import resumeInfoReducer from "./reducers/resumeInfoReducer";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    resumeInfoReducer:resumeInfoReducer,
    loginReducer:loginReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));