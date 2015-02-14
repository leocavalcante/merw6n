import React from 'react';
import FooItem from './foo-list-item.jsx';

export default React.createClass({
    render() {
        return (
            <ul className="app_foo-list">
                {this.props.data.map(this.renderItem)}
            </ul>
        )
    },

    renderItem(foo) {
        return (
            <FooItem key={foo.bar} entity={foo} />
        )
    }
})