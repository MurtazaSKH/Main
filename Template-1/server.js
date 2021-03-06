const express = require('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// api routes
const users = require('./routes/api/users');
const userSession = require('./routes/api/userSession');
const profile = require('./routes/api/profile');
const uploadimage = require('./routes/api/uploadimage');

const app=express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongodb

mongoose
  .connect(db)
  .then(() => console.log('MongoBD connected'))
  .catch(err => console.log(err));

// app.get('/',(req,res) => {res.send('Hello World!')});
// Passport middleware
app.use(passport.initialize());
// passport config
require('./config/passport')(passport);


// Use routes
app.use('/api/users',users);
// app.use('/api/userSession',userSession);
app.use('/api/profile',profile);
app.use('/api/uploadImage',uploadimage);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port:'+port));
