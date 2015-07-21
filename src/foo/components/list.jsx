import React from 'react';
import FooItem from './list_item.jsx';

export default React.createClass({
    render() {
        return (
            <ul className="foo__list">
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