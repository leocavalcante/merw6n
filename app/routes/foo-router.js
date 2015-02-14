import express from 'express';
import FooRepo from './../repos/foo-repo.js';

let fooRouter = express();
let fooRepo = new FooRepo();

fooRouter.get('/', function(req, res) {
    res.json(fooRepo.findAll());
});

export default fooRouter;