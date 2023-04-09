const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {

    //checking json web token exists & verified
    if (token) {
        jwt.verify(token, 'new user in job portal', (err, decodeToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            }
            else {
                console.log(decodeToken);
                next();
            }
        })
    }
    else {
        res.redirect('/login');
    }
}

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    // checking if the token exists
    if (token) {
        jwt.verify(token, 'new user in job portal', async (err, decodeToken) => {
            if (err) {
                console.log(err.message);

                next();
            }
            else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };