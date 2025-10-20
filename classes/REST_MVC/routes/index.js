import express, { Router } from 'express';

const app = express();
const ROUTER = express.Router();
ROUTER.get('/', function(req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "4.17.2"
    });
});
module.exports = ROUTER;