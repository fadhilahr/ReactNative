export const FIND_BOOK = 'FIND_BOOK';
export const FIND_BOOK_SUCCESS = 'FIND_BOOK_SUCCESS';
export const FIND_BOOK_ERROR = 'FIND_BOOK_ERROR';

export const SAVE_BOOK = 'SAVE_BOOK';
export const SAVE_BOOK_SUCCESS = 'SAVE_BOOK_SUCCESS';
export const SAVE_BOOK_ERROR = 'SAVE_BOOK_ERROR';

export const ADD_BOOK = "ADD_BOOKS";
export const ADD_BOOK_SUCCESS = "ADD_BOOKS_SUCCESS";
export const ADD_BOOK_ERROR = "ADD_BOOKS_ERROR";

export const FIND_ALL_BOOKS = 'FIND_ALL_BOOKS';
export const FIND_ALL_BOOKS_SUCCESS = 'FIND_ALL_BOOKS_SUCCESS';
export const FIND_ALL_BOOKS_ERROR = 'FIND_ALL_BOOKS_ERROR';

export const DELETE_BOOK = "DELETE_BOOKS";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOKS_SUCCESS";
export const DELETE_BOOK_ERROR = "DELETE_BOOKS_ERROR";


export function saveBook(id, data) {
    return {
        type: SAVE_BOOK,
        id: id,
        data: data
    };

}

export function findBook(id) {
    return {
        type: FIND_BOOK,
        id: id
    };

}

export function addBook(data) {
    return {
        type: ADD_BOOK,
        data: data,
    };
}



export function findAllBooks() {
    return {
        type: FIND_ALL_BOOKS
    };
}

export function deleteBook(id) {
    return {
        type: DELETE_BOOK,
        id: id
    };
}

