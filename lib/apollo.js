import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withData } from 'next-apollo'

const httpLink = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token || ''
        }
    };
});

const config = {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
};

export default withData(config)