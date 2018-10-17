const { gql } = require ('apollo-server-express');

const typeDefs = gql`
    type User {
        email: String,
        password: String
    }
    type Query {
        profile: User
        restrictedEndPoint: String!
    }
    type Mutation {
        login(email: String!, password: String!): String!
    }
`;

module.exports = typeDefs;