const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items = require('./routes/api/items');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//Configuring database from the congig/keys.js file
const db = require('./config/keys').mongoURI;

//Connect to MongoDB using mongoose
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

//Use Routes
app.use('/api/items', items);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//process.env.PORT is for release, 5000 is for dev
const port = process.env.PORT || 5000;

//Tell the server which port to listen on
//Second argument is a callback
app.listen(port, () => console.log("Server started on port " + port))