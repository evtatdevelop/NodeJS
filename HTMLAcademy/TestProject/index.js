
const args = process.argv.slice(2);

switch ( args[0] ) {
  case '--help': 
    console.log(`This is a test app.
      At this moment it do nothing!
      --help    - print this info; 
      --version - print app version;
    `);
    break;
  
  case '--version':
    console.log('v0.0.1');
    break;
  
  default:
    console.log('This is test app.');
    console.error(`To list posible options use '--help'`);
    process.exit(1);
}