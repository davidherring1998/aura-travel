import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_VIEW = gql`
  mutation addView($viewText: String!) {
    addView(viewText: $viewText) {
      token
      view {
        _id
        viewText
      }
    }
  }
`;
