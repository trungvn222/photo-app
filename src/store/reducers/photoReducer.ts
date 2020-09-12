import IPhotoReducerState from "models/IPhotoReducerState";
import actionTypes from "store/actions/actionTypes";
import actionTypeKeys from "store/actions/actionTypeKeys";
import IRootReducer from "models/IRootReducer";

import { findPhotoIndexById } from "api/photoApi";

const initState: IPhotoReducerState = {
	loading: false,
	paged: 1,
	limit: 60,
	search: "",
	error: null,
	items: [],
	totalItem: 60,
};

const photosReducer = (
	state = initState,
	action: actionTypes,
): IPhotoReducerState => {
	switch (action.type) {
		case actionTypeKeys.SEARCH_PHOTO: {
			const { search } = action.payload;
			return {
				...state,
				paged: 1,
				limit: 60,
				search,
			};
		}
		case actionTypeKeys.SEARCH_PHOTO_SUCCESS: {
			const { photos, totalItem } = action.payload;
			return {
				...state,
				items: [...photos],
				paged: ++state.paged,
				totalItem,
				loading: false,
			};
		}
		case actionTypeKeys.GET_PHOTOS: {
			return {
				...state,
				loading: true,
			};
		}
		case actionTypeKeys.GET_PHOTO_SUCCESS: {
			const { photos, totalItem } = action.payload;
			return {
				...state,
				items: [...state.items, ...photos],
				paged: ++state.paged,
				totalItem,
				loading: false,
			};
		}
		case actionTypeKeys.TOGGLE_FAVORITE_PHOTO: {
			const { id } = action.payload;
			const photoIndex: number = findPhotoIndexById(state.items, id);
			if (photoIndex >= 0) {
				const { items } = state;
				items[photoIndex].isFavorite = !items[photoIndex].isFavorite;
				return { ...state, items: [...items] };
			}
			return state;
		}
		default:
			return state;
	}
};

export const photosSelector = {
	getPhotos: (state: IRootReducer) => {
		return (filter: string) => {
			if (state.photos.items.length) {
				console.log(
					state.photos.items.filter((p) => p.id == "5553124"),
				);
			}

			switch (filter) {
				case "Favorite": {
					const photos = { ...state.photos };
					const items = photos.items.filter((p) => p.isFavorite);

					return { ...photos, items: [...items] };
				}
				default:
					return state.photos;
			}
		};
	},
};

export default photosReducer;
