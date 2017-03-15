"use strict";

const getRandomInt = require('./util').getRandomInt;

const GERMAN_ENUMERATION = [
  'erster',
  'zweiter',
  'dritter',
  'vierter',
  'fünfter'
];

class ImdbMenu {

  static get menues(){
    return {
      "main": {
        "help": "Nenne mir einen Film und ich sage dir seine Bewertung. Sage zum Beispiel: Wie wurde Matrix bewertet. Du kannst auch präzisere Fragen stellen. Zum Beispiel: Wie wurde Pulp Fiction aus dem Jahr 1994 bewertet. Du kannst jederzeit Abbrechen, Stop oder Exit sagen."
      },
      "movieRating": {
        "help": ""
      },
      "movieList": {
        "help": "Sage zum Beispiel: "+ GERMAN_ENUMERATION[getRandomInt(0,4)] +" Film."
      }
    };
  }

  constructor(data){
    this.history = [];
    this._started = true;

    if(data && data.history){
      this.history = data.history;
    }else{
      this.history.push({menue: "main"});
    }
  }

  get started(){
    return this._started;
  }

  inMenue(menue){
    if(this.history[this.history.length - 1].menue !==  menue){
      this.history.push({menue: menue});
    }
  }

  popFromMenue(){
    this.history.pop();
  }

  getCurrentMenu() {
    if(this.history.length === 1){
      return this.history[0].menue;
    }else{
      return this.history[this.history.length-1].menue;
    }
  }

  getData(){
    return {
      histroy: this.history
    };
  }

}

module.exports = ImdbMenu;
