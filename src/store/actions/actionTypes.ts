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
} from "./IActions";

type actionTypes =
	| IGetPhotosAction
	| IGetPhotosSuccessAction
	| IGetPhotosFailAction
	| IGetPhotoDetailAction
	| IGetPhotoDetailSuccessAction
	| IGetPhotoDetailFailAction
	| IToggleFavoritePhotoAction
	| ISearchPhotoAction
	| ISearchPhotoSuccessAction;

export default actionTypes;
