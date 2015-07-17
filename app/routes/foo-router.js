import express from 'express';
import FooRepo from './../repos/foo-repo.js';

let fooRouter = express();
let fooRepo = new FooRepo();

fooRouter.get('/', function(req, res) {
    fooRepo.findAll(function(foos) {
        res.json(foos);
    });
});

export default fooRouter;