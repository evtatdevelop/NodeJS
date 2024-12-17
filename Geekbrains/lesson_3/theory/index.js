const { ReadableStream } = require("node:util");
Object.defineProperties(globalThis, { ReadableStream: { value: ReadableStream }, });

const { log, error } = require('console');

// const http = require('http');
// const https = require('https');

const request = require('request');
// var rp = require('request-promise');

// const nodemailer = require('nodemailer');

const cheerio = require('cheerio');



//? std
// https.get('https://www.google.com/', res => log(res.statusCode))
//     .on('error', e => error(e));

// http.request({
//   hostname: 'jsonplaceholder.typicode.com',
//   port: 80,
//   path: '/posts',
//   method: 'POST'
// }, res => log(res.statusCode))
// .on('error', e => error(e));  


//? request
// request('https://www.google.com/', (err, response, body) => {
//   if ( err ) throw err;
//   log(body);
// });

// rp('http://www.google.com')
//     .then( htmlString => log(htmlString))
//     .catch( err => { throw err });


//? email
// const smtpTransport = nodemailer.createTransport("SMTP", {
//   service: 'GMail',
//   auth: {
//     user: 'tatarenkoeg75@gmail.com',
//     pass: 'MFree!Wrd&Wrk#Acnt#Th@Mk230124',
//   }
// });

// smtpTransport.sendMail({
//   from: 'Evgenii Tatarenko (tatarenkoeg75@gmail.com)',
//   to: 'Evgenii (tatarenkoe@gmail.com)',
//   subject: 'Test',
//   text: 'Hello Evgenii',
//   html: 'Hello <b>Evgenii</b>',
// }, (err, response) => {
//   if ( err ) throw err;
//   log(`message is sent ${response.messageId}!`);
//   smtpTransport.close();
// });


//? Server
// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello world');
//   res.end();
// }).listen(8888);

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'application/json'});
//   res.write(JSON.stringify({name: "john", age: 49}));
//   res.end();
// }).listen(8888);


//? cheerio
// https://pattaya-city.ru/banki/kurs/
// currencyconverter-minimalistic-currency-price

request('https://pattaya-city.ru/banki/kurs/', (err, response, body) => {
  if ( err || response.statusCode !== 200 ) throw err;
  const $ = cheerio.load(body);
  log( $('.currencyconverter-minimalistic-single-currency .currencyconverter-minimalistic-currency-price').eq(0).text() );
});
