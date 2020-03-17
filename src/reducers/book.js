import {
    FIND_BOOK, FIND_BOOK_SUCCESS, FIND_BOOK_ERROR,
    SAVE_BOOK, SAVE_BOOK_SUCCESS, SAVE_BOOK_ERROR,
    ADD_BOOK, ADD_BOOK_SUCCESS, ADD_BOOK_ERROR,
    DELETE_BOOK, DELETE_BOOK_SUCCESS, DELETE_BOOK_ERROR,
    FIND_ALL_BOOKS, FIND_ALL_BOOKS_SUCCESS, FIND_ALL_BOOKS_ERROR
} from '../actions/book'



export function findBook(state = { data: null, loading: false }, action) {
    switch (action.type) {
        case FIND_BOOK:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_BOOK_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export function findAllBooks(state = { data: [], loading: false }, action) {
    switch (action.type) {
        case FIND_ALL_BOOKS:
            return {
                ...state,
                data: [],
                loading: true
            };
        case FIND_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_ALL_BOOKS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export function saveBook(state = { data: null, loading: false }, action) {
    console.log()
    switch (action.type) {
        case SAVE_BOOK:
            return {
                ...state,
                loading: true,
                error: null

            };
        case SAVE_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };
        case SAVE_BOOK_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    };
}

export function addBook(state = { data: [], loading: false }, action) {
    console.log()
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                loading: true,
                error: null

            };
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };
        case ADD_BOOK_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    };
}

export function deleteBook(state = { data: null, loading: false }, action) {
    switch (action.type) {
        case DELETE_BOOK:
            return {
                ...state,
                data: [],
                loading: true,
                error: null

            };
        case DELETE_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            };
        case DELETE_BOOK_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}

