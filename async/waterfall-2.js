const fs = require('fs');
const async = require('async');
const _dir = './data/';

const writeStream = fs.createWriteStream('./log.txt', {
  flags: 'a',
  encoding: 'utf8',
  mode: 0o666
});

async.waterfall([
  readDir = callback => {
    fs.readdir(_dir, (err, files) => callback(err, files));
  },

  loopFiles = (files, callback) => {
    //files.forEach(name => callback(null, name)); <- Error in async
    callback(null, files[0]);
  },

  checkFile = (file, callback) => {
    fs.stat(`${_dir}${file}`, (err, stats) => callback(err, stats, file));
  },

  readData = (stats, file, callback) => {
    if (stats.isFile()) {
      fs.readFile(`${_dir}${file}`, 'utf8', (err, data) =>
        callback(err, file, data));
    }
  },

  modify = (file, text, callback) => {
    const adjdata = text.replace(/somecompany\.com/g, 'burningbird.net');
    callback(null, file, adjdata);
  },

  writeData = (file, text, callback) => {
    fs.writeFile(`${_dir}${file}`, text, err => callback(err, file));
  },

  logChange = (file, callback) => {
    writeStream.write(`Changed ${file} \n`, 'utf8', err => callback(err));
  }
], err => (err) ? console.error(err.message) : console.log('Modified files'));
