import { combineReducers } from 'redux';
import count from './count.js';
import { findAllBooks, findBook, saveBook, addBook, deleteBook } from './book'

const allReducers = combineReducers({
    findAllBooks,
    findBook,
    saveBook,
    addBook,
    deleteBook
});
export default allReducers;