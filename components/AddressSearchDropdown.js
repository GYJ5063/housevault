import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const QUERY = gql`
        query addresses($postcode: String!) {
            addresses(postcode: $postcode) {
                id
                building_number
                building_name
                thoroughfare
            }
        }
`;

export default ({ postcode }) => {

    return(
        <Query query={QUERY} variables={{postcode}}>
            {({ loading, error, data }) => {
                if(loading) return 'loading...';
                if(error) return `Error: ${error.message}`;
                console.log(data);
                return(
                    <div className="form-group">
                        <br />
                        <select name="address_id" className="form-control" id="address_id" onChange={this.handleChange}>
                            <option value="">Choose Address</option>
                            {
                                _.map(data.addresses, address => (
                                    <option key={address.id} value={address.id}>
                                        {address.building_number} {address.thoroughfare}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                );
            }}
        </Query>
    );
};