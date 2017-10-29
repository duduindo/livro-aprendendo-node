

const fs = require('fs');
const async = require('async');

async.waterfall([
  first = callback => {
    callback(null, 'One');
  },

  second = (one, callback) => {
    callback(null, one,'two');
  },

  any = (one, two, callback) => {
    console.log(one, two);
  }

],(err, result) => ((err) ? console.error(err.message) : console.log(result)));
