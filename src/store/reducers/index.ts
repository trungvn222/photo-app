import { combineReducers } from "redux";
import photoReducers from "store/reducers/photoReducer";
import photoDetailReducer from "store/reducers/photoDetailReducer";

export default combineReducers({
	photos: photoReducers,
	photo: photoDetailReducer,
});
