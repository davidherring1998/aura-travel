const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    userName: String
  }

  type View {
    viewText: String
  }

  type Waves {
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
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addView(viewText: String!): View
    updateUser(
      username: String
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
