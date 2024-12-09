const { log } = require('console');
const { EventEmitter } = require('events');

class Kettle extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => this.emit('created', {}));
  }

  start = () => {
    setImmediate(() => this.emit('started', {}));
    setTimeout(() => this.emit('ready', {}), 2000);
  }
}

const k = new Kettle();
k.start();

k.on('created', () => log('kettle is created'));
k.on('started', () => log('kettle is started'));
k.on('ready', () => log('kettle is ready'));
