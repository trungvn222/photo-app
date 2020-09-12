import keys from "store/actions/actionTypeKeys";
import {
	IGetPhotosAction,
	IGetPhotosSuccessAction,
	IGetPhotosFailAction,
	IGetPhotoDetailAction,
	IGetPhotoDetailSuccessAction,
	IGetPhotoDetailFailAction,
	IToggleFavoritePhotoAction,
	ISearchPhotoAction,
	ISearchPhotoSuccessAction,
} from "store/actions/IActions";

import { IPhoto, IPhotoDetail } from "models/IPhoto";
import IError from "models/IError";

export const getPhotos = (
	paged: number,
	limit: number,
	search: string,
): IGetPhotosAction => {
	return {
		type: keys.GET_PHOTOS,
		payload: {
			paged,
			limit,
			search,
		},
	};
};

export const getPhotosSuccess = (
	photos: Array<IPhoto>,
	totalItem: number,
): IGetPhotosSuccessAction => {
	return {
		type: keys.GET_PHOTO_SUCCESS,
		payload: {
			photos,
			totalItem,
		},
	};
};

export const getPhotosFail = (error: IError): IGetPhotosFailAction => {
	return {
		type: keys.GET_PHOTO_FAIL,
		payload: {
			error,
		},
	};
};

export const getPhotoDetail = (id: string): IGetPhotoDetailAction => {
	return {
		type: keys.GET_PHOTO_DETAIL,
		payload: {
			id,
		},
	};
};

export const getPhotoDetailSuccess = (
	photo: IPhotoDetail,
): IGetPhotoDetailSuccessAction => {
	return {
		type: keys.GET_PHOTO_DETAIL_SUCCESS,
		payload: {
			photo,
		},
	};
};

export const getPhotoDetailFail = (
	error: IError,
): IGetPhotoDetailFailAction => {
	return {
		type: keys.GET_PHOTO_DETAIL_FAIL,
		payload: {
			error,
		},
	};
};

export const ToggleFavoritePhoto = (id: string): IToggleFavoritePhotoAction => {
	return {
		type: keys.TOGGLE_FAVORITE_PHOTO,
		payload: {
			id,
		},
	};
};

export const searchPhoto = (search: string): ISearchPhotoAction => {
	return {
		type: keys.SEARCH_PHOTO,
		payload: {
			search,
		},
	};
};

export const searchPhotoSuccess = (
	photos: Array<IPhoto>,
	totalItem: number,
): ISearchPhotoSuccessAction => {
	return {
		type: keys.SEARCH_PHOTO_SUCCESS,
		payload: {
			photos,
			totalItem,
		},
	};
};
