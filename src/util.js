"use strict";


exports.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


exports.menuFactory = function(request) {
  const ImdbMenu = require('./Menu');
  const CONST = require('./const');

  let session = request.getSession().get(CONST.IMDB_SESSION_KEY+"menu");
  if(session === undefined){
    session = {};
  }
  return new ImdbMenu(session);
};