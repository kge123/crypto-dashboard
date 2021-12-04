const session = require("express-session");
const exphbs = require("express-handlebars");
// const bodyparser = require("body-parser");
const express = require("express");
const path = require("path");
const routes = require("./controllers");
const helpers = require('./utils/helper')
// const cookieParser = require("cookie-parser");
// const { Sequelize } = require("sequelize");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieparser())

//track user across session
// app.use (session({
//   key: 'user_sid',
//   secret: 'somerandonstuffs',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       expires: 600000}
// }))

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};










// const rp = require('request-promise');
// const requestOptions = {
//   method: 'GET',
//   uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    
//   qs: {
//     'start': '1',
//     'limit': '5000',
//     'convert': 'USD'
//   },
//   headers: { 
//     'X-CMC_PRO_API_KEY': 'c94fbe3f-5b90-4820-8e7e-f8792db7d915'
//   },
//   json: true,
//   gzip: true
// };
// let name=''
// rp(requestOptions).then(response => {
//   name = response
//    console.log('API call response:', response);
// }).catch((err) => {
//   console.log('API call error:', err.message);
// });




// const sequelize = new Sequelize("cryptotable_db", "root", "dal123456789+", {
//   host: "localhost",
//   dialect: "mysql",
//   port: 3001,
// });

// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(cookieparser());
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});
