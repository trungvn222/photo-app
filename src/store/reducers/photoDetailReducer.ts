import IPhotoDetailReducerState from "models/IPhotoDetailReducerState";
import actionTypes from "store/actions/actionTypes";
import actionTypeKeys from "store/actions/actionTypeKeys";
import IRootReducer from "models/IRootReducer";

const initState: IPhotoDetailReducerState = {
	loading: false,
	error: null,
	photo: {
		id: "",
		imageFull: {
			url: "https://via.placeholder.com/1280x853",
			alt: "placeholder",
		},
		views: 0,
		downloads: 0,
		likes: 0,
	},
};

const photoDetailReducer = (
	state = initState,
	action: actionTypes,
): IPhotoDetailReducerState => {
	switch (action.type) {
		case actionTypeKeys.GET_PHOTO_DETAIL: {
			return {
				...state,
				loading: true,
			};
		}
		case actionTypeKeys.GET_PHOTO_DETAIL_SUCCESS: {
			const { photo } = action.payload;
			return {
				...state,
				loading: false,
				photo: { ...photo },
			};
		}
		default:
			return state;
	}
};

export const photoDetailSelector = {
	getPhoto: (state: IRootReducer): IPhotoDetailReducerState => {
		return state.photo;
	},
};

export default photoDetailReducer;
