const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/authRoutes');

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    //incorrect email
    if (err.message === 'Incorrect Email !') {
        errors.email = 'That email is not registered';
    }

    //incorrect password
    if (err.message === 'Incorrect Password !') {
        errors.password = 'Password is incorrect';
    }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // vaildate the error
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
            // console.log(error.properties);
        });
    };
    return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'new user in job portal', {
        expiresIn: maxAge
    });
}

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('JWT', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    // console.log(email, password);
    // res.send('user login');
    try {
        const user = await User.login(email, password);
        console.log('user confirmed!')
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({});
    }
}

module.exports.logout_get = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}