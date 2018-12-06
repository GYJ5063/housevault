import React, {Component} from 'react';
import {Router} from '../routes';
import EstateAgents from "../components/clients/EstateAgents";
import PropertyDevelopers from "../components/clients/PropertyDevelopers";

class HomePage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <PropertyDevelopers/>
            </div>
        );
    }
}


export default HomePage;