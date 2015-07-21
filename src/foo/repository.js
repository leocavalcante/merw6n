import $ from 'jquery';
import Foo from './foo';

export default class {
    fetchAll(success) {
        return $.getJSON('/api/foos', function(res) {
            success(res.map(Foo.prototype.fromObject));
        });
    }
}