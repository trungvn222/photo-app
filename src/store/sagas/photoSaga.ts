import { call, put, takeLatest } from "redux-saga/effects";
import {
	getAllPhotoApi,
	getPhotoDetailApi,
	mapPhotoData,
	mapPhotoDetailData,
} from "api/photoApi";
import actionTypeKeys from "store/actions/actionTypeKeys";
import {
	getPhotosSuccess,
	getPhotosFail,
	getPhotoDetailSuccess,
	getPhotoDetailFail,
	searchPhotoSuccess,
} from "store/actions/actions";
import {
	IGetPhotosAction,
	IGetPhotoDetailAction,
} from "store/actions/IActions";

function* getPhotos(action: IGetPhotosAction) {
	try {
		const { paged, limit, search } = action.payload;
		let params = {
			page: paged,
			per_page: limit,
			q: search,
		};

		const res = yield call(getAllPhotoApi, params);
		const photos = mapPhotoData(res?.hits);
		yield put(getPhotosSuccess(photos, res.totalHits));
	} catch (error) {
		put(getPhotosFail(error));
	}
}

function* getPhotosBySearch(action: IGetPhotosAction) {
	try {
		const { search } = action.payload;
		let params = {
			q: search,
		};

		const res = yield call(getAllPhotoApi, params);
		const photos = mapPhotoData(res?.hits);
		yield put(searchPhotoSuccess(photos, res.totalHits));
	} catch (error) {
		put(getPhotosFail(error));
	}
}

function* getPhoto(action: IGetPhotoDetailAction) {
	try {
		const { id } = action.payload;
		const res = yield call(getPhotoDetailApi, {
			id,
		});
		if (res && res.hits && res.hits.length > 0) {
			const photo = mapPhotoDetailData(res.hits[0]);
			if (photo) {
				yield put(getPhotoDetailSuccess(photo));
			} else {
				put(
					getPhotoDetailFail({
						code: "NOT_FOUND",
						message: "not found",
					}),
				);
			}
		}
	} catch (error) {
		put(getPhotoDetailFail(error));
	}
}

export default function* photoSaga() {
	yield takeLatest(actionTypeKeys.GET_PHOTOS, getPhotos);
	yield takeLatest(actionTypeKeys.SEARCH_PHOTO, getPhotosBySearch);
	yield takeLatest(actionTypeKeys.GET_PHOTO_DETAIL, getPhoto);
}
