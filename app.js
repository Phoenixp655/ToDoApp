const express = require('express');
require('dotenv').config();
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');


app.get('/', (req, res) => res.render('index'))


























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))