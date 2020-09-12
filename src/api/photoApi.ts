import axiosClient from "./axiosClient";
import { IPhoto, IPhotoDetail } from "models/IPhoto";

export function mapPhotoData(photos: Array<object>): Array<IPhoto> | [] {
	return photos.map((photo: any) => {
		return {
			id: photo.id,
			isFavorite: false,
			thumb: {
				url: photo.webformatURL,
				alt: "photo",
			},
		};
	});
}
export function mapPhotoDetailData(photo: any): IPhotoDetail | null {
	if (!photo) {
		return null;
	}
	const {
		id = "",
		largeImageURL = "",
		tags = "",
		views = 0,
		downloads = 0,
		likes = 0,
	} = photo;
	return {
		id,
		imageFull: {
			url: largeImageURL,
			alt: tags,
		},
		views,
		downloads,
		likes,
	};
}

export const findPhotoIndexById = (list: Array<IPhoto>, id: string) => {
	return list.findIndex((item) => item.id === id);
};

export async function getAllPhotoApi(params: object) {
	const res: any = await axiosClient.get(
		"?key=18260703-696d946e7253d064996a58e3f",
		{
			params,
		},
	);

	return res;
}

export async function getPhotoDetailApi(params: object) {
	const res: any = await axiosClient.get(
		"?key=18260703-696d946e7253d064996a58e3f",
		{
			params,
		},
	);

	return res;
}
