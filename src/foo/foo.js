import Foo from './foo';

export default class {
    constructor(bar) {
        this.bar = bar;
    }

    upperBar() {
        return this.bar.toUpperCase();
    }

    fromObject(obj) {
        return new Foo(obj.bar);
    }
}