const express = require('express');
require('dotenv').config();
const compression = require('compression');
const connectDB = require('./src/config/DBConfig');
const app = express();

connectDB();

app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

app.use('/public', express.static(__dirname + '/src/public'));

app.use('/api/todo', require('./src/routers/toDoRouter'));

//response caching header middleware for get request
app.use((req, res, next) => {
    const period = 60 * 5;
    req.method == 'GET'
        ? res.set('Cache-control', `public, max-age=${period}`)
        : res.set('Cache-control', 'no-store');
    next();
});

app.get('/', (req, res) => res.render('index'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
