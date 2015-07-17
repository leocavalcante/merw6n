import $ from 'jquery';
import Foo from './../entities/foo.js';
import Mongo from '../mongo-proxy';

export default class {
    findAll(callback) {
        let self = this;

        Mongo.connect(function(err, db) {
            if (err) return console.log(err);

            db.collection('foos').find({}).toArray(function(err, foos) {
                if (err) return console.log(err);
                
                callback(foos.map(self.fooFromObject));
            });
        });
    }

    fetchAll(success) {
        return $.getJSON('/api/foos', function(res) {
            success(res.map(this.fooFromObject));
        }.bind(this));
    }

    fooFromObject(obj) {
        return new Foo(obj.bar);
    }
}