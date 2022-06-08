import {combineReducers, createStore} from "redux";
import resumeInfoReducer from "./reducers/resumeInfoReducer";

import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
    resumeInfoReducer:resumeInfoReducer,
    loginReducer:loginReducer,
})

export const store = createStore(rootReducer);