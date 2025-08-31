import colors from 'colors'

const args = process.argv.slice(2);

switch ( args[0] ) {
  case '--help': 
    console.log(`This is a test app.
      At this moment it do nothing!
      --help    - print this info; 
      --version - print app version;
      --colors - test of 'colors' module;
    `);
    break;
  
  case '--version':
    console.log('v0.0.1');
    break;

  case '--colors':
    console.log('Green'.green);
    console.log('Underline Red'.underline.red);
    console.log('Inverse'.inverse);
    console.log('RainBow'.rainbow);
    console.log('Drops the bass'.trap);
   break;
  
  default:
    console.log('This is test app.');
    console.error(`To list posible options use '\x1b[1;31m--help\x1b[0m'`);
    process.exit(1);
}