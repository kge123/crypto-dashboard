const sequelize = require('./config/connection')
const bcrypt = require('bcrypt')
const cookieparser= require('express-session')
const morgan = require("morgan")
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser')
const express= require('express')
const path= require('path')
const routes = require('./controllers');
//const { Sequelize } = require('sequelize');
const User = require('./models/user')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser())
// app.use (session({
//   //key: 'user_sid',
//   secret: 'somerandonstuffs',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       expires: 600000}
// }))
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));

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