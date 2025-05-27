import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(cors());  //? Access-Control-Allow-Origin: *



app.listen('8888');
