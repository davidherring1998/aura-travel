const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    userName: String
    views: [View]
  }

  type View {
    _id: ID
    viewText: String
  }

  type Waves {
    _id: ID
    waveBody: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]
    view: [View]
    wave: [Waves]
  }

  type Mutation {
    addUser(
      userName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addView(viewText: String!): Auth
    updateUser(
      userName: String
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateView(_id: ID!): View
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
