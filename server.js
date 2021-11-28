const Sequalize = require('sequelize')
const bcrypt = require('bcrypt')
const cookieparser= require('express-session')
const morgan = require("morgan")
const User = require ('./models/user')
const handlebars= require('express-handlebars')
const bodyparser = require('body-parser')
const express= require('express')
const path= require('path')
const routes = require('./controllers');
const { Sequelize } = require('sequelize');
const User = require('./models/user')


// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser())

//track user across session
app.use (session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000}
}))



const sequelize = new Sequelize('crypto_table', 'root', 'dal123456789+', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3001
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});