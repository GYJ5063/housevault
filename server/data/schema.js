// const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
// const resolvers = require('./resolvers');
const { gql } = require ('apollo-server-express');

const typeDefs = gql`
    type User {
        email: String,
        password: String
    }
    type Query {
        profile: User
    }
    type Mutation {
        login(email: String!, password: String!): User
    }
`;

// module.exports = makeExecutableSchema({ typeDefs, resolvers });
module.exports = typeDefs;