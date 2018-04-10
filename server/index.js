require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const { SERVER_PORT, SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL, CONNECTION_STRING } = process.env;
const auth_ctrl = require('./controllers/auth_controller.js');

const app = express();

massive(CONNECTION_STRING).then(db => app.set('db', db));

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.findUser([profile.id]).then(users => {
        if (!users[0]) {
            db.createUser([profile.id, profile.displayName, profile.picture]).then(user => {
                done(null, user[0].user_id);
            });
        }
        else {
            done(null, users[0].user_id);
        }
    });
}));

passport.serializeUser((id, done) => done(null, id));
passport.deserializeUser((id, done) => {
    app.get('db').findSessionUser([id]).then(user => {
        done(null, user[0]);
    })
});


// AUTH ENDPOINTS
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failueRedirect: 'http://localhost:3000/#/'
}));
app.get('/auth/me', auth_ctrl.checkUser);
app.get('/auth/logout', auth_ctrl.redirectUser);
app.put('/user', auth_ctrl.createUser);


// GROUP ENDPOINTS


// GROUP COMMENT ENDPOINTS


// EVENT ENDPOINTS


// EVENT COMMENT ENDPOINTS



app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
