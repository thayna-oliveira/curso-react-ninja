import React, {Component} from 'react';

class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Bem vindo, {this.props.name}</h1>
        );
    }
}

export default Title;
