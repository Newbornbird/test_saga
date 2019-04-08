import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import {increaseCounter, decreaseCounter, multiplyCounter, splitCounter} from '../../routines';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* handleIncreasingCounter(routine) {
  yield call(delay, routine.payload);
  yield put(increaseCounter.success());
};

function* handleDecreasingCounter(routine) {
  yield call(delay, routine.payload);
  yield put(decreaseCounter.success());
};

function* handleMultiplyCounter(routine) {
  yield call(delay, routine.payload);
  yield put(multiplyCounter.success());
};

function* handleSplitCounter(routine) {
  yield call(delay, routine.payload);
  yield put(splitCounter.success());
};

function* watchIncreasingCounter() {
  yield takeEvery(increaseCounter.TRIGGER, handleIncreasingCounter)
};

function* watchDecreasingCounter() {
  yield takeEvery(decreaseCounter.TRIGGER, handleDecreasingCounter)
}

function* watchMultiplyCounter() {
  yield takeEvery(multiplyCounter.TRIGGER, handleMultiplyCounter)
}

function* watchSplitCounter() {
  yield takeEvery(splitCounter.TRIGGER, handleSplitCounter)
}

export default function* rootSaga() {
  yield all([
    watchIncreasingCounter(),
    watchDecreasingCounter(),
    watchMultiplyCounter(),
    watchSplitCounter(),
  ])
};
