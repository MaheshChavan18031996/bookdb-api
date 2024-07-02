const Book = require('../models/Book');

const getAllBooks = () => Book.find({});
const createBook = (bookData) => Book.create(bookData);
const updateBook = (id, bookData) => Book.findByIdAndUpdate(id, bookData, { new: true });
const deleteBook = (id) => Book.findByIdAndDelete(id);

module.exports = {getAllBooks, createBook, updateBook,deleteBook};
