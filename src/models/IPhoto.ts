import IImage from "models/IImage";

export interface IPhoto {
	id: string;
	thumb: IImage;
	isFavorite: boolean;
}

export interface IPhotoDetail {
	id: string;
	imageFull: IImage;
	views: number;
	downloads: number;
	likes: number;
}

export interface IPhotoProps extends IPhoto {
	onToggleFavorite(id: string, isFavorite: boolean): void;
}
