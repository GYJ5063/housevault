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
            <div>
                <Post data={this.props.page}/>
            </div>
        );
    }
}
Index.getInitialProps = async ({  query: { slug } }) => {

    if(typeof slug !== 'undefined') {

        const res = await fetch(process.env.BACKEND_URL + 'page/' + slug);
        const json = await res.json();
        console.log(json);

        return { slug: slug, page: json }
    }

    return {};  

};


export default Index;