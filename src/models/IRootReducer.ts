import IPhotoReducerState from "./IPhotoReducerState";
import IPhotoDetailReducerState from "./IPhotoDetailReducerState";
export default interface IRootReducer {
	photos: IPhotoReducerState;
	photo: IPhotoDetailReducerState;
}
