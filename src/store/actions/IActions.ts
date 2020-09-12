import { Action } from "redux";
import { IPhoto, IPhotoDetail } from "models/IPhoto";
import IError from "models/IError";
import keys from "store/actions/actionTypeKeys";

export interface IGetPhotosAction extends Action {
	readonly type: keys.GET_PHOTOS;
	payload: {
		paged: number;
		limit: number;
		search: string;
	};
}

export interface IGetPhotosSuccessAction extends Action {
	readonly type: keys.GET_PHOTO_SUCCESS;
	payload: {
		photos: Array<IPhoto>;
		totalItem: number;
	};
}

export interface IGetPhotosFailAction extends Action {
	readonly type: keys.GET_PHOTO_FAIL;
	payload: {
		error: IError;
	};
}

export interface IGetPhotoDetailAction extends Action {
	readonly type: keys.GET_PHOTO_DETAIL;
	payload: {
		id: string;
	};
}
export interface IGetPhotoDetailSuccessAction extends Action {
	readonly type: keys.GET_PHOTO_DETAIL_SUCCESS;
	payload: {
		photo: IPhotoDetail;
	};
}

export interface IGetPhotoDetailFailAction extends Action {
	readonly type: keys.GET_PHOTO_DETAIL_FAIL;
	payload: {
		error: IError;
	};
}

export interface IToggleFavoritePhotoAction extends Action {
	readonly type: keys.TOGGLE_FAVORITE_PHOTO;
	payload: {
		id: string;
	};
}

export interface ISearchPhotoAction extends Action {
	readonly type: keys.SEARCH_PHOTO;
	payload: {
		search: string;
	};
}

export interface ISearchPhotoSuccessAction extends Action {
	readonly type: keys.SEARCH_PHOTO_SUCCESS;
	payload: {
		photos: Array<IPhoto>;
		totalItem: number;
	};
}
