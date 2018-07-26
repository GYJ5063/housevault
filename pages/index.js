import React, {Component} from 'react';
import {Router} from '../routes';
import Homepage from '../components/Homepage'

class Index extends Component {
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