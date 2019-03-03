const express = require('express');
const books = require('../utils/mocks/books');

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        data: books,
        message: 'Books retrieved'
    });
});

router.get('/:bookId', (req, res) => {
    let { bookId } = req.params;
    let book;

    bookId = parseInt(bookId);

    books.forEach(element => {
        if (element.id === bookId) {
            book = element;
        }
    });

    if (book === undefined) {
        res.status(404).json({
            error: 'Book not found'
        });
    } else {
        res.status(200).json({
            data: book,
            message: 'Book retrieved'
        });
    }
});

module.exports = router;