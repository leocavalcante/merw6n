import $ from 'jquery';
import Foo from './../entities/foo.js';

export default class {
    findAll() {
        return [
            new Foo('baz'),
            new Foo('bar')
        ]
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