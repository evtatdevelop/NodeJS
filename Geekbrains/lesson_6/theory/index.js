import express from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import bodyParser from 'body-parser';

const app = express();

app.use(cookieParser('myPasswordString'));
//? cookies
// app.get('/', (req, res) => {
//   res.cookie('test', 'Testting cookie!!!'); //? set cookie
//   res.clearCookie('someCookie'); //? unset cookie
//   res.json(req.cookies);
// });

app.use(cookieSession({keys: ['mySicretString']}));
//? sessions
// app.use((req, res) => {
//   let n = req.session.views || 0;
//   req.session.views = ++n;
//   res.end(`it's your ${n} visit here`);
// });


app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());  //? in case when you need session
passport.use(new LocalStrategy(
  function(username, password, done) {
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) { return done(null, false); }
    //   if (!user.verifyPassword(password)) { return done(null, false); }
    //   return done(null, user);
    // });

    if ( username !== 'testUserName') return done(null, false);
    if ( password !== 'testPassword') return done(null, false);
    return done(null, {id: 1, name: 'John Smith', username: 'testUserName', });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // User.findOne({ id: id }, function (err, user) {...}  //? select from DB by ID 
  done(null, {id: 1, name: 'John Smith', username: 'testUserName', });
});

const auth = passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/login'
});

//? perhup it'll be a react app...
app.get('/login', (req, res) => {
  res.send(' ...login form... ');
});

app.post('/login', auth);

const mustBeAuthenticated = (req, res, next) => {
  if ( req.isAuthenticated() ) next();
  else res.redirect('/login');
}

app.all('/user', mustBeAuthenticated);
app.all('/user/*', mustBeAuthenticated);

//? perhup it'll be a react app...
app.get('/user', (req, res) => {
  res.send('...User profile page...');
});

//? perhup it'll be a react app...
app.get('/user/settings', (req, res) => {
  res.send('...User settings page...');
});


app.listen('8888');