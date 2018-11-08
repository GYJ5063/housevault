import React, {Component} from 'react';
import {Router} from '../../routes';
import Homepage from '../../components/Homepage'
import Post from '../../components/Post'
import fetch from "isomorphic-fetch";
import AdSense from 'react-adsense';

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
                <AdSense.Google
                    client='ca-pub-4216565043840609'
                    slot='8158930894'
                    style={{ display: 'block' }}
                    format='auto'
                    responsive='true'
                />
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