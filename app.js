const express = require('express');
const mongoose = require('mongoose');
// const mongodb = require('mongodb').MongoClient;
const app = express();
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
// mongodb.connect('mongodb://localhost:27017/Job_portal')

// app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json());

const dbUrl = "mongodb+srv://nishi:nishi123@cluster0.rybzfdd.mongodb.net/JobPortal"
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(9000), console.log('connected'))
    .catch((err) => console.log(err));

app.listen(8080);
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home.ejs'));
app.get('/main_page', requireAuth, (req, res) => res.render('main_page.ejs'));
app.use(authRoutes);
app.use(cookieParser());

//cookies
app.get('/set-cookies', (req, res) => {
    // res.setHeader('Set-cookie', 'newUser = true');
    res.cookie('newUser', false);
    res.send('You got the cookies');
});

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
});