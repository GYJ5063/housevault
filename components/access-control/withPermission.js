import React from 'react';
import { Router } from '../../routes';

export default (WrappedComponent) => {
    return class WithPermission extends React.Component {
        constructor(props) {
            super(props);
        }

        render () {
            const { error } = this.props;
            if(error) {
                if (error.message.includes('Must be logged in')) {
                    Router.pushRoute('/login');
                    return null;
                }
                else if(error.message.includes('permission')) {
                    return null;
                }
                else {
                    return `Error! ${error.message}`;
                };
            }
            return <WrappedComponent {...this.props} />
        }
    }
};