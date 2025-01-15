import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const { log } = console;

app.get('/', (req, res) => {
  res.send('Express works');
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  const { method, query } = req; 
  const sessionKey =  method === 'GET' ? query.sessionKey : req.body.sessionKey;
  if ( sessionKey === 'testSessionKey' ) {
    // req.checkSessionKey = true;
    next();
  }  else res.send('Err: No Session Key');
});

//? http://localhost:8888/users?sessionKey=testSessionKey
app.get('/users', (req, res) => {
  res.send('Users');
})

//? http://localhost:8888/users/123?sessionKey=testSessionKey
app.get('/users/:id', (req, res, next) => {
  res.send(`UserID ${req.params.id}`);
});

app.post('/', (req, res) => {
  // log(req.checkSessionKey);
  const { id, name, } = req.body;
  res.send({id, name});
});

app.listen(8888);