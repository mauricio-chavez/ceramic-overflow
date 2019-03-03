const express = require('express');
const suppliers = require('../utils/mocks/suppliers');

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        data: suppliers,
        message: 'Suppliers retrieved'
    });
});

router.post('/', (req, res) => {
    body = req.body
    res.status(201).json({
        data: { ...body },
        message: 'Supplier created'
    });
});

router.get('/:supplierId', (req, res) => {
    let { supplierId } = req.params;
    let supplier;

    supplierId = parseInt(supplierId);

    suppliers.forEach(element => {
        if (element.id === supplierId) {
            supplier = element;
        }
    });

    if ( supplier === undefined ) {
        res.status(404).json({
            error: 'Supplier not found.'
        });
    } else {
        res.status(200).json({
            data: supplier,
            message: 'Supplier retrieved'
        });
    }
});

router.delete('/:supplierId', (req, res) => {
    let { supplierId } = req.params;
    let supplier;

    supplierId = parseInt(supplierId);

    suppliers.forEach(element => {
        if (element.id === supplierId) {
            supplier = element;
        }
    });

    if ( supplier === undefined ) {
        res.status(404).json({
            error: 'Supplier not found.'
        });
    } else {
        res.status(200).json({
            data: supplier,
            message: 'Supplier deleted.'
        });
    }
});
module.exports = router;