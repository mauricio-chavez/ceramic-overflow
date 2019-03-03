const express = require('express');
const bodyParser = require('body-parser');
const forumRouter = require('./routes/forum');
const suppliersRouter = require('./routes/suppliers');
const libraryRouter = require('./routes/library');
const usersRouter = require('./routes/users');

const PORT = process.env.PORT || 8080
const app = express();


app.use((req, res, next) => {
    res.header({
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
    });
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Ceramic Overflow'
    });
});

app.use('/forum', forumRouter);
app.use('/suppliers', suppliersRouter);
app.use('/library', libraryRouter);
app.use('/users', usersRouter);

app.all('*', (req, res) => {
    res.status(405).json({
        error: `Method ${ req.method } not allowed.`
    });
});


const server = app.listen(PORT, () => {
    console.log(`Listening on http://127.0.0.1:${ server.address().port }/`);
})