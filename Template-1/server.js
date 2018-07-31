const express = require('express');
const mongoose = require ('mongoose');
const users = require('./routes/api/users');
const userSession = require('./routes/api/userSession');
const profile = require('./routes/api/profile');
const app=express();

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongodb

mongoose
  .connect(db)
  .then(() => console.log('MongoBD connected'))
  .catch(err => console.log(err));

app.get('/',(req,res) => {res.send('Hello World!')});

// Use routes
app.use('/api/users',users);
// app.use('/api/userSession',userSession);
// app.use('/api/profile',profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port:'+port));
