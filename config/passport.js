const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const keys = require('./keys')

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret,
			callbackURL: "/auth/google/redirect"
			// scope: ["profile", "email"],
		},
		() =>{

		}
		
	)
);

// passport.serializeUser((user, done) => {
// 	done(null, user);
// });

// passport.deserializeUser((user, done) => {
// 	done(null, user);
// });