import React, {Component} from 'react';
import {Router} from '../routes';
import Homepage from '../components/Homepage'

class Index extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            search_keyword: "",
            search_status: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({search_keyword: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            search_keyword: this.state.search_keyword,
            search_status: 'Searching...'
        })

        let postcode = this.state.search_keyword;

        let url_postcode = process.env.BACKEND_URL + "postcode-exist/" + postcode;

        fetch(url_postcode)
            .then(res => res.json())
            .then(
                (status) => {
                    console.log(status);
                    if(status) {
                        this.setState({
                            search_status: 'Found it, redirecting...'
                        })

                        Router.pushRoute('/postcode/' + postcode);
                    } else {
                        this.setState({
                            search_status: 'Invalid postcode'
                        })
                    }
                },
                (error) => {
                    this.setState({
                        search_status: 'Invalid postcode'
                    })

                }
            )
    }

    render() {
        if (typeof this.props.slug === 'undefined') {
            return (
                <div>
                    <Homepage/>
                </div>
            );
    }   

    }
}
Index.getInitialProps = async ({ req, query: { slug } }) => {
    return { property: json.data }
};
export default Index;