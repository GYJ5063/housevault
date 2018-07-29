import React from "react";
import fetch from "isomorphic-fetch";
import Layout from './Layout'
import renderHTML from 'react-render-html';
import Head from 'next/head'
import _ from 'lodash'

class Post extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                    <Head>
                        <title>{(_.find(this.props.data.meta,{meta_key: '_su_title'})) ? _.find(this.props.data.meta,{meta_key: '_su_title'}).meta_value : ''}</title>
                        <meta name="description" content={(_.find(this.props.data.meta,{meta_key: '_su_description'})) ? _.find(this.props.data.meta,{meta_key: '_su_description'}).meta_value :"   "} />
                    </Head>
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col">
                                <h1>{this.props.data.title}</h1>
                            </div>
                            </div>

                            <div className="page-body">
                                {renderHTML(this.props.data.content)}
                            </div>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Post;