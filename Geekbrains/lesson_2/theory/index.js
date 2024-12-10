const { log, error } = require('console');
const minimist = require('minimist');
const readlne = require('readline');
const fs = require('fs');


//? node index.js --start 123 true -x 3 -y5 -abc --beep=true one two
// log(
//   process.argv.slice(2)
// );

// log(
//   minimist( process.argv.slice(2) )
// );



//? node index.js -l
//? node index.js --language
// log(
//   minimist( process.argv.slice(2), { alias: {l: 'language'} })
// );



// log(
//   process.env
// );
//? NODE_ENV=dev node index.js
// switch ( process.env.NODE_ENV ) {
//   case 'dev': require('dev.config');
//     break;
//   case 'prod':  require('prod.config');
//     break;
// }



//? $ node index.js
// log( 'What\'s new?' );
// error( 'Could be better!' );

// const rl = readlne.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   // error: process.error,
// })

// rl.on('line', line => {
//   log(`Your message is '${line}'`);
//   if ( line === 'exit' ) {
//     rl.close();
//   }
// });



//? $ node index.js
// fs.exists('./package.json', exists => {
//   if ( exists ) {
//     fs.readFile('./package.json', (err, data) => {
//       log(data.toString());
//     });
//   } 
// })

//! try not to use
// const exists = fs.existsSync('./package.json');
// if ( exists ) {
//   const data = fs.readFileSync('./package.json');
//   log(data.toString())
// }
