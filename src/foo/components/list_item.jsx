import React from 'react';

export default React.createClass({
    render() {
        return (
            <li className="list__item">{this.props.entity.upperBar()}</li>
        )
    }
})