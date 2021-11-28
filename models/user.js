var Sequalize = require('sequelize')
var bcrypt = require('bcrypt')
var cookieparser= require('express-session')
var morgan = require("morgan")
var User = require ('./models/user')
var handlebars= require('express-handlebars')
var bodyparser = require('body-parser')
var express= require('express')
var path= require('path')

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}


// table 
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

//hashing password

User.beforeCreate((user,option)=>{
    const salt= bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password,salt)
})

// create all defined tables in database
User.prototype.validatepassword=function(password){
    return bcrypt.compareSync(password, this.password)
}

sequelize.sync()
.then(()=> console.log("account added to table"))
.catch(console.error())


// export module
module.exports = User;