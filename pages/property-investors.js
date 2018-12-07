import React, {Component} from 'react';
import {Router} from '../routes';
import EstateAgents from "../components/clients/EstateAgents";
import PropertyInvestors from "../components/clients/PropertyInvestors";

class HomePage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <PropertyInvestors/>
            </div>
        );
    }
}


export default HomePage;