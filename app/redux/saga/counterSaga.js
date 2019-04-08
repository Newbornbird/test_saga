import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {increaseCounter, decreaseCounter} from '../../routines';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* handleIncreasingCounter(routine) {
  yield call(delay, routine.payload);
  yield put(increaseCounter.success());
};

function* handleDecreasingCounter(routine) {
  yield call(delay, routine.payload);
  yield put(decreaseCounter.success());
};

function* watchIncreasingCounter() {
  yield takeEvery(increaseCounter.TRIGGER, handleIncreasingCounter)
};

function* watchDecreasingCounter() {
  yield takeEvery(decreaseCounter.TRIGGER, handleDecreasingCounter)
}

export default function* rootSaga() {
  yield all([
    watchIncreasingCounter(),
    watchDecreasingCounter()
  ])
};
