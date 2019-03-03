const express = require('express');
const posts = require('../utils/mocks/posts');

const router = express.Router();

router.get('/posts', (req, res) => {
    res.status(200).json({
        data: { posts },
        message: 'Post retrieved'
    });
});

router.post('/posts', (req, res) => {
    body = req.body
    res.status(201).json({
        data: {...body},
        message: 'Post created'
    });
});

router.get('/posts/:postId', (req, res) => {
    let { postId } = req.params;
    let post;

    postId = parseInt(postId);

    posts.forEach(element => {
        if (element.id === postId) {
            post = element;
        }
    });

    if (post === undefined) {
        res.status(404).json({
            error: 'Post not found'
        });
    } else {
        res.status(200).json({
            data: { ...post },
            message: 'Post retrieved'
        });
    }
});

router.delete('/posts/:postId', (req, res) => {
    let { postId } = req.params;
    let post;

    postId = parseInt(postId);

    posts.forEach(element => {
        if (element.id === postId) {
            post = element;
        }
    });

    if (post === undefined) {
        res.status(404).json({
            error: 'Post not found'
        });
    } else {
        res.status(200).json({ 
            data: { ...post },
            message: 'Post deleted successfully'
        });
    }
});

router.get('/posts/:postId/answers', (req, res) => {
    let { postId } = req.params;
    let answers;

    postId = parseInt(postId);

    posts.forEach(element => {
        if (element.id === postId) {
            answers = element.answers;
        }
    });

    if (answers === undefined) {
        res.status(404).json({
            error: 'Answers not found'
        });
    } else {
        res.status(200).json({ 
            data: answers,
            message: 'Answers retrieved'
        });
    }
});

router.post('/posts/:postId/answers', (req, res) => {
    body = req.body;
    res.status(201).json({
        data: { ...body },
        message: 'Answer created'
    });
});


router.get('/posts/:postId/answers/:answerId', (req, res) => {
    let { postId, answerId } = req.params;
    let answers, commentary;

    postId = parseInt(postId);
    answerId = parseInt(answerId);

    posts.forEach(element => {
        if (element.id === postId) {
            answers = element.answers;
        }
    });

    if (answers === undefined) {
        res.status(404).json({
            error: 'Post not found'
        });
    } else {
        answers.forEach(element => {
            if (element.id === answerId) {
                commentary = element;
            }
        });

        if (commentary === undefined) {
            res.status(404).json({
                error: 'Answer not found'
            });
        } else {
            res.status(200).json({
               data: { ...commentary },
               message: 'Answer retrieved.'
            });
        }
    }
});

router.delete('/posts/:postId/answers/:answerId', (req, res) => {
    let { postId, answerId } = req.params;
    let answers, commentary;

    postId = parseInt(postId);
    answerId = parseInt(answerId);

    posts.forEach(element => {
        if (element.id === postId) {
            answers = element.answers;
        }
    });

    if (answers === undefined) {
        res.status(404).json({
            error: 'Post not found'
        });
    } else {
        answers.forEach(element => {
            if (element.id === answerId) {
                commentary = element;
            }
        });

         if (commentary === undefined) {
            res.status(404).json({
                error: 'Answer not found'
            });
        } else {
            res.status(200).json({
               data: { ...commentary },
                message: 'Answer deleted'
            });
        }
    }
});

module.exports = router;