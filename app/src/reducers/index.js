import {combineReducers} from "redux";

import { reducer as formReducer } from "redux-form";
import user from "./user";
import addMarkers from "./addMarkers";
import markers from "./markers";
import places from "./places";

const reducers=combineReducers({
    form:formReducer,
    user,
    addMarkers,
    markers,
    places,
});
export default reducers;