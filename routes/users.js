const express = require('express');
const users = require('../utils/mocks/users');

const router = express.Router();


router.post('/', (req, res) => {
    body = req.body;
    res.status(201).json({
        data: { ...body },
        message: 'User created'
    });
});

router.get('/:userId', (req, res) => {
    let { userId } = req.params;
    let user;

    userId = parseInt(userId);
    
    users.forEach(element => {
        if (element.id === userId) {
            user = element;
        }
    });

    if (user === undefined) {
        res.status(404).json({
            error: 'User not found'
        });
    } else {
        res.status(200).json({
            data: user,
            message: 'User retrieved'
        });
    }
});

router.delete('/:userId', (req, res) => {
    let { userId } = req.params;
    let user;

    userId = parseInt(userId);
    
    users.forEach(element => {
        if (user.id === userId) {
            user = element;
        }
    });

    if (user === undefined) {
        res.status(404).json({
            error: 'User not found'
        });
    } else {
        res.status(200).json({
            data: user,
            message: 'User deleted'
        });
    }
});

module.exports = router;