import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

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

export default ({ postcode, onSelectAddress }) => {
    return(
        <Query query={QUERY} variables={{postcode}}>
            {({ loading, error, data }) => {
                if(loading) return 'loading...';
                if(error) return console.error(error);

                return(
                    <div className="form-group">
                        <br />
                        <select name="address_id" className="form-control" id="address_id" onChange={(event) => {
                            onSelectAddress(_.find(data.addresses, { 'id': parseInt(event.target.value) }))
                            }}>
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