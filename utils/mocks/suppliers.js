const suppliers = [{
        id: 1,
        name: 'Mauricio Chávez',
        rating: 4.8,
        description: 'Proveedor #1 de America Latina',
        reviews: [
            {
                user: 'Fernando García',
                supplier: 1,
                rating: 4.6,
                comment: 'Sí es bastante bueno :O'
            },
            {
                user: 'Mauricio Chávez',
                supplier: 1,
                rating: 5,
                comment: 'Soy muy bueno'
            }
        ]
    },
    {
        id: 2,
        name: 'Santiago Rueda',
        rating: 5,
        description: 'Abierto a ofertas',
        reviews: [{
            user: 'Osvaldo Rodriguez',
            supplier: 1,
            rating: 5,
            comment: 'El mejor'
        }]
    },
    {
        id: 3,
        name: 'Fernando García',
        rating: 2.6,
        description: 'El alfarero es primero',
        reviews: [
            {
                user: 'Fernando García',
                supplier: 1,
                rating: 5,
                comment: 'El mejor'
            },
            {
                user: 'Mauricio Chávez',
                supplier: 1,
                rating: 2,
                comment: 'Ni tanto'
            },
            {
                user: 'Santiago Rueda',
                supplier: 1,
                rating: 0.8,
                comment: 'Me estafó :('
            }
        ]
    }
];

module.exports = suppliers;