import React, {Component} from 'react';
import {Router} from '../routes';
import EstateAgents from "../components/EstateAgents";

class HomePage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <EstateAgents/>
            </div>
        );
    }
}


export default HomePage;