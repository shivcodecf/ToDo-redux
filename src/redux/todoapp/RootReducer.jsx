import { combineReducers } from "redux";
import { OperationsReducer } from "./reducers/Operations";

export const RootReducer = combineReducers({
    OperationsReducer,
    // more reducers can be added here
})