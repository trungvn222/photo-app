import { IPhoto } from "./IPhoto";
import IError from "./IError";

export default interface IPhotoReducerState {
	error: IError | null;
	items: Array<IPhoto> | [];
	loading: boolean;
	paged: number;
	limit: number;
	search: string;
	totalItem: number;
}
