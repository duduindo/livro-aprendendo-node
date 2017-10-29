const fs = require('fs');
const async = require('async');

async.waterfall([
  readData = (callback) => {
    fs.readFile('./data/data1.txt', 'utf8', (err,data) => callback(err, data));
  },

  modify = (text, callback) => {
    const adjdata = text.replace(/somecampany\.com/g, 'burningbird.net');
    callback(null, adjdata);
  },

  writeData = (text, callback) => {
    fs.writeFile('./data/data1.txt', text, (err) => {
      callback(err, text);
    });
  }
], (err, result) => ((err) ? console.error(err.message) : console.log(result)));
