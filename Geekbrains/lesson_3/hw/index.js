const { ReadableStream } = require("node:util");
Object.defineProperties(globalThis, { ReadableStream: { value: ReadableStream }, });

const { log, error } = require('console');

var rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const cc = require("node-console-colors");

rp('https://ex24.pro/')
  .then( htmlString => {
    const $ = cheerio.load(htmlString);
    const cash = Math.round((parseFloat( $('#singleratesbody tr').eq(1).find('td').eq(1).text().split(' ')[0] ) + 0.015) * 1000)/1000;
    const card = parseFloat( $('#singleratesbody tr td').eq(1).text().split(' ')[0] );
    stat({card, cash});
  })
  .catch( err => { throw err } );

const stat = rates =>  fs.readFile('./ratesHistory.json', (_err, data) => {
  const {card, cash} = (rates);
  const stat = JSON.parse(data);
  let dCash, dCard = 0
  if ( stat.length ) {
    const last = stat.at(-1);
    dCash = Math.round((cash - last.cash)*1000)/1000;
    dCard = Math.round((card - last.card)*1000)/1000;
  }

  log( 'Cash:', cc.set ( `${dCash < 0 ? "fg_red" : "fg_green"}`, `${cash} (${dCash}${dCash < 0 ? " ↓" : dCash > 0 ? " ↑" : ''})`) );
  log( 'Card:', cc.set( `${dCard < 0 ? "fg_red" : "fg_green"}`, `${card} (${dCard}${dCard < 0 ? " ↓" : dCard < 0 ?" ↑" : ''})`) );
  
  stat.push({'date': Date.now(), ...rates});
  
  fs.writeFile('./ratesHistory.json', JSON.stringify(stat), (err) => {
    if ( err ) console.error(err);
  })
});