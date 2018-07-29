import React, {Component} from 'react';
import {Router} from '../routes';
import Homepage from '../components/Homepage'
import Post from '../components/Post'
import fetch from "isomorphic-fetch";

class Index extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        if (typeof this.props.slug === 'undefined') {
            return (
                <div>
                    <Homepage/>
                </div>
            );
        }

        return (
            <div className="page">
                <Post data={this.props.page}/>
            </div>
        );
    }
}
Index.getInitialProps = async ({  query: { page , sub } }) => {

    let url = (sub) ? process.env.BACKEND_URL + 'page/' + page + '/' + sub : process.env.BACKEND_URL + 'page/' + page;

    if(typeof page !== 'undefined') {
        const res = await fetch(url);
        const json = await res.json();
        return { slug: page, page: json }
    }

    return {};  

};


export default Index;