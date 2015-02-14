import express from 'express';
import fooRouter from './routes/foo-router.js';

let app = express();
app.use('/api/foos', fooRouter);
app.use(express.static('public/'));
app.listen(1337);

console.log('Server listening on 0.0.0.0:1337');