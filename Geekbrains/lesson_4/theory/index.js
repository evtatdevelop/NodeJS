import express from 'express';
import bodyParser from 'body-parser';
import consolidate from 'consolidate';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { log } = console;

const app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.someMidleware = 'midleware has worked';
  log('use');
  next();
  // res.redirect('/'); //? if not next()
});

app.all('/', (req, res, next) => {
  log('all for all of request types to "/"');
  next(); //? passes control to the next
  // res.send("All response"); //? sends a response
})

//? http://localhost:8888/users
app.get('/users', (req, res) => {
  log('/users')
  res.send('Users');
})

//? http://localhost:8888/users/123
app.get('/users/:id', (req, res, next) => {
  log('/users/:id');
  // res.send(`User ${req.params.id}`);
  next();
});

//? http://localhost:8888/users/Johnn
app.get('/users/Johnn', (req, res) => {
  log('/users/Johnn')
  res.send('order of calls');
})

//? http://localhost:8888/users/123/Smith
//? http://localhost:8888/users/123/Smith?status=test&position=normal
app.get('/users/:id/:name', (req, res) => {
  log(req.query);
  log('/users/:id/:name');
  res.send(`User ${req.params.id} has name ${req.params.name}`);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Test title',
    features: [
      {name: 1, value: 'One'},
      {name: 2, value: 'Two'},
      {name: 3, value: 'Three'},
    ],
  });
});

app.get('/', (req, res) => {
  log(req.someMidleware);
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  log(req.body);
  res.send('Ok');
})

app.listen(8888);