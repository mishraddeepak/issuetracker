const express = require('express');
const db = require('./config/mongoose');
const port = 2000
const app = express();

const expressLayouts = require('express-ejs-layouts');
//middlewares
app.use(express.static('assets'));
app.use(expressLayouts);
app.use(express.urlencoded());

//  view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/', require('./routes'));

app.listen(port, (err) => {
 
  console.log(port)
  if (err) {
    console.log('Error in running the server',err);
  }
  console.log('Server is running on the port:',port);
});
