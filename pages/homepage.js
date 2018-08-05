import React, {Component} from 'react';
import {Router} from '../routes';
import Homepage from '../components/Homepage'
import Post from '../components/Post'
import fetch from "isomorphic-fetch";

class HomePage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Homepage/>
            </div>
        );
    }
}


export default HomePage;