import { all, AllEffect } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export default function* sagas(): Generator<AllEffect<SagaIterator>> {
  yield all([]);
}
