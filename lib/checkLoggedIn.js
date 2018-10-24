import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export default (query, component) => {
    const query1 = gql`
        query profile {
            profile {
                id
                first_name
                last_name
                company {
                    id
                    name
                }
                email
            }
        }
    `;

    return graphql(query1)(component);
}