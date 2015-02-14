import React from 'react';

export default React.createClass({
    render() {
        return (
            <li>{this.props.entity.upperBar()}</li>
        )
    }
})