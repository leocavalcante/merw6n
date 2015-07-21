import Foo from './foo';
import Mongo from '../app/mongo_proxy';

export default class {
    findAll(callback) {
        let self = this;

        Mongo.connect(function(err, db) {
            if (err) return console.log(err);

            db.collection('foos').find({}).toArray(function(err, foos) {
                if (err) return console.log(err);
                
                callback(foos.map(Foo.prototype.fromObject));
            });
        });
    }
}