import React from "react";
import fetch from "isomorphic-fetch";
import Layout from '../components/Layout'
import renderHTML from 'react-render-html';
import Head from 'next/head'
import _ from 'lodash'

class Page extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="container list-page-padding">
                <Layout>
                    <Head>
                        <title>{(_.find(this.props.page.meta,{meta_key: '_su_title'})) ? _.find(this.props.page.meta,{meta_key: '_su_title'}).meta_value : ''}</title>
                        <meta name="description" content={(_.find(this.props.page.meta,{meta_key: '_su_description'})) ? _.find(this.props.page.meta,{meta_key: '_su_description'}).meta_value :"   "} />
                    </Head>
                    <div className="row">
                        <div className="col-9">
                            <div className="row">
                                <div className="col">
                                <h1>{this.props.page.title}</h1>
                            </div>
                            </div>

                            <div className="page-body">
                                {this.props.page.content.split('\n').map((item, key) => {
                                    return <p>{renderHTML(item)}</p>
                                })}
                                {/*{renderHTML(this.props.page.content)}*/}
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
Page.getInitialProps = async ({ req, query: { page } }) => {
    const res = await fetch(process.env.BACKEND_URL + 'page/' + page);
    const json = await res.json();
    return { page: json }
};
export default Page;