import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import fetch from 'isomorphic-fetch';

let apolloClient = null;

if (!process.browser) {
    global.fetch = fetch;
}


function create(initialState, { getToken }) {
    const httpLink = createHttpLink({
        uri: '/graphql',
        credentials: 'same-origin'
    });
    
    const authLink = setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = getToken();
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ''
            }
        };
    });
      
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {})
    });
}

export default function initApollo(initialState, options) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState, options);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState, options);
    }

    return apolloClient;
};