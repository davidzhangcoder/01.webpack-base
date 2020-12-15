import React from 'react';

export default class TestClass extends React.Component {
    render() {
        return (
            <div>this is {this.props.data}</div>
        );
    }
}