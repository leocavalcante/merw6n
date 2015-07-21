import assert from 'assert';
import Foo from '../src/foo/foo';

describe('Foo', function() {
    it('should uppercase bar', function() {
        let foo = new Foo('test');
        assert.equal('TEST', foo.upperBar());
    });
});