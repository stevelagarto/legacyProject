const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'production') {
	require('dotenv').config();
}
const keys = require('./config/keys');

require('./models/User');
require('./models/Blog');
require('./services/passport');
require('./services/cache');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// if( process.env.NODE_ENV==='DEV' || process.env.NODE_ENV==='test' ){
//   router.use(middleware)
//   router.get('/auth/fake', route)
// }

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);
require('./routes/uploadRoutes')(app);
if (['production', 'ci'].includes(process.env.NODE_ENV)) {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve('client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on ports`, PORT);
});



// FAKE USER CREATION

// let fakeUser = {
//   "_id":"fake",
//   "googleId":"112417604495190713456",
//   "displayName":"Alan Douglas Aranda",
//   __v: 0
// }

// function middleware(req,res,next){
//   if( req && req.session && req.session.user_tmp ){
//     req.user = req.session.user_tmp
//   }
//   if( next ){ next() }
// }
// function route(req,res){
//   req.session = req.session || {}
//   req.session.user_tmp = fakeUser
//   res.redirect('/')
// }