import React from 'react';
import FooList from '../foo/components/list.jsx';
import FooRepo from '../foo/repository';

let fooRepo = new FooRepo();

export default React.createClass({
    getInitialState() {
        return {
            foos: []
        }
    },

    componentDidMount() {
        fooRepo.fetchAll(function(foos) {
            this.setState({foos: foos});
        }.bind(this));
    },

    render() {
        return (
            <FooList data={this.state.foos} />
        );
    }
})