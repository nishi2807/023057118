require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const mongodb = require('mongodb')
const app = express();
const cors = require('cors');
// const axios = require('axios');
const auth = require('./routes/auth')
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passport')
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
// mongodb.connect('mongodb://localhost:27017/Job_portal')


app.use(express.json());
// app.use('/auth', auth);

const dbUrl = "mongodb://localhost/JobPortal"
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(9000), console.log('connected'))
    .catch((err) => console.log(err));

// const frontUri = `http://localhost:3000/`
// app.use(cors({ origin: frontUri, credentials: true }))

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: "GET,POST",
//         credentials: true
//     }))

app.listen(8080);
app.get('*', checkUser);
app.use(authRoutes);
app.use(cookieParser());

//cookies
app.get('/set-cookies', (req, res) => {
    res.cookie('newUser', false);
    res.send('You got the cookies');
});

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
})