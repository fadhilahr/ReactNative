import { put, takeLatest } from 'redux-saga/effects';
import {
    SAVE_BOOK, SAVE_BOOK_SUCCESS, SAVE_BOOK_ERROR,
    FIND_BOOK, FIND_BOOK_SUCCESS, FIND_BOOK_ERROR,
    ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR,
    DELETE_BOOK, DELETE_BOOK_SUCCESS, DELETE_BOOK_ERROR,
    FIND_ALL_BOOKS, FIND_ALL_BOOKS_SUCCESS, FIND_ALL_BOOKS_ERROR
} from '../actions/book'
import { filteredFetch } from '../utils/apiUtils';

const sampleData =
    [

        {
            id: 1,
            title: "Kebangkitan Tanah Air",
            publisher: 'Melon Indonesia',
            price: 50000,
            stock: 29

        },
        {
            id: 2,
            title: "Kebangkitan Tanah Papua",
            publisher: 'Melon Indonesia',
            price: 75000,
            stock: 50

        }
    ]
function* saveBook(action) {

    try {
        var url = 'http://192.168.1.2:3000/books/' + action.data.id;
        var method = "PUT";
        console.log("test sagas");
        const data = yield filteredFetch(
            url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(action.data)
        })
        yield put({
            type: SAVE_BOOK_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: SAVE_BOOK_ERROR,
            error: error
        });


    }
}


function* findAllBooks() {
    try {
        const json = yield fetch('http://192.168.1.2:3000/books').then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || 'Unknown Error')
            }
            return response.json();
        })
        yield put({
            type: FIND_ALL_BOOKS_SUCCESS,
            data: json.data,
        });
    } catch (error) {
        yield put({
            type: FIND_ALL_BOOKS_ERROR,
            error: error
        })
    }
}


function* findBook(action) {
    try {
        const json = yield fetch('http://192.168.1.2:3000/books/' + action.id).then(response => response.json());
        var data = json.data;
        console.log(data);
        yield put({
            type: FIND_BOOK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_BOOK_ERROR,
            error: error
        })
    }
}

function* addBook(action) {
    try {
        var url = 'http://192.168.1.2:3000/books/';
        var method = "POST";
        console.log("test sagas");
        const data = yield filteredFetch(
            url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(action.data)
        })

        yield put({
            type: ADD_BOOK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: ADD_BOOK_ERROR,
            error: error
        });
    }
}

function* deleteBook(action) {
    try {
        var url = 'http://192.168.1.2:3000/books/' + action.id;
        var method = "DELETE"

        console.log("test sagas");
        const data = yield filteredFetch(
            url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(action.data)
        })
        yield put({
            type: DELETE_BOOK_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: DELETE_BOOK_ERROR,
            error: error
        });


    }
}


export function* watchSaveBook() {
    yield takeLatest(SAVE_BOOK, saveBook);
}
export function* watchFindAllBooks() {
    yield takeLatest(FIND_ALL_BOOKS, findAllBooks);
}

export function* watchFindBook() {
    yield takeLatest(FIND_BOOK, findBook);
}

export function* watchAddBook() {
    yield takeLatest(ADD_BOOK, addBook);
}

export function* watchDeleteBook() {
    yield takeLatest(DELETE_BOOK, deleteBook);
}