const posts = [
    {
        id: 1,
        content: '¿Cómo abrir una lata?',
        user: 'Mauricio Chávez',
        created: '2019-03-02',
        likes: 5,
        answers: [
            {
                id: 1,
                user: 'Fernando García',
                content: 'Busca un tutorial en YouTube!',
                post: 1,
                likes: 1
            },
            {
                id: 2,
                user: 'Osvaldo Rodriguez',
                content: 'Con el abrelatas',
                post: 1,
                likes: 0
            }
        ]
    },
    {
        id: 2,
        content: 'Buenos lugares donde conseguir barro',
        user: 'Santiago Rueda',
        created: '2019-03-02',
        likes: 6,
        answers: [
            {
                id: 1,
                user: 'Fernando García',
                content: 'En barro.com',
                post: 2,
                likes: 1
            },
            {
                id: 2,
                user: 'Mauricio Chávez',
                content: 'Yo te lo vendo. Contáctame',
                post: 2,
                likes: 0
            }
        ]
    },
    {
        id: 3,
        content: 'Compartan sus mejores recetas!',
        user: 'Osvaldo Rodriguez',
        created: '2019-03-02',
        likes: 7,
        answers: [
            {
                id: 1,
                user: 'Señor Miguel',
                content: 'Pasa a ver mis publicaciones en mi perfil',
                post: 2,
                likes: 1
            },
            {
                id: 2,
                user: 'Santiago Rueda',
                content: 'En la sección de libros hay muchos buenos',
                post: 2,
                likes: 0
            }
        ]
    },
    {
        id: 4,
        content: 'Ando buscando a alguien que me haga varios jarrones para una boda',
        user: 'Fernando García',
        created: '2019-03-02',
        likes: 8,
        answers: [
            {
                id: 1,
                user: 'Armando Durán',
                content: 'Contáctame, yo te ayudo!',
                post: 3,
                likes: 1
            },
            {
                id: 2,
                user: 'Santiago Rueda',
                content: 'Contacta a Armando Durán',
                post: 3,
                likes: 0
            }
        ],
    },
    {
        id: 5,
        content: '¿Me recomiendan comprarle materiales a Mauricio Chávez',
        user: 'Armando Durán',
        created: '2019-03-02',
        likes: 9,
        answers: [
            {
                id: 1,
                user: 'Fernando García',
                content: 'Definitivamente',
                post: 5,
                likes: 1
            },
            {
                id: 2,
                user: 'Osvaldo Rodriguez',
                content: 'NO',
                post: 5,
                likes: 0
            }
        ]
    }
]

module.exports = posts;