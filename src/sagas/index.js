import { all, fork } from 'redux-saga/effects'
import { watchFindAllBooks, watchFindBook, watchSaveBook, watchAddBook, watchDeleteBook } from './book'

export default function* sagas() {
    yield all([
        fork(watchSaveBook),
        fork(watchFindBook),
        fork(watchFindAllBooks),
        fork(watchAddBook),
        fork(watchDeleteBook),
    ]);
};