const { gql } = require ('apollo-server-express');

const typeDefs = gql`
    type User {
        id: Int!
        first_name: String!
        last_name: String!
        company: Company!
        email: String!
    }
    type Company {
        id: Int!
        name: String!
    }
    type Query {
        profile: User
        restrictedEndPoint: String!
    }
    type Mutation {
        login(email: String!, password: String!): String!
        createUser(email: String!, first_name: String!, last_name: String!, password: String!, company_id: String!): User!
        createCompany(name: String!): Company!
    }
`;

module.exports = typeDefs;