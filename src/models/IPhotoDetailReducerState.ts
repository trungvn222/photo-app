import { IPhotoDetail } from "./IPhoto";
import IError from "./IError";

export default interface IPhotoDetailReducerState {
	loading: boolean;
	error: IError | null;
	photo: IPhotoDetail;
}
