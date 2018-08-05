import React, {Component} from 'react';
import {Router} from '../routes';
import Homepage from '../components/Homepage'
import Post from '../components/Post'
import fetch from "isomorphic-fetch";

class SubPage extends Component {

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
SubPage.getInitialProps = async ({  query: { page , sub } }) => {

    let url = process.env.BACKEND_URL + 'page/' + page + '/' + sub;

    if(typeof page !== 'undefined') {
        const res = await fetch(url);
        const json = await res.json();
        return { slug: page, page: json }
    }
    return {};  

};


export default SubPage;