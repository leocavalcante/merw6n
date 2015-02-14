import React from 'react';
import FooList from './components/foo-list.jsx';
import FooRepo from './repos/foo-repo.js';

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