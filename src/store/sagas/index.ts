import { all } from "redux-saga/effects";
import photoSaga from "./photoSaga";
export default function* rootSaga() {
	yield all([photoSaga()]);
}
