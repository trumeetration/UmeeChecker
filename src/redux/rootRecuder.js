import {combineReducers} from "redux";
import {inputReducer} from "./reducers/inputReducer";
import {walletsReducer} from "./reducers/walletsReducer";


export const rootReducer = combineReducers({
    inputReducer,
    walletsReducer
});