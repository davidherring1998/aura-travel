import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      userName
    }
  }
`;
export const QUERY_VIEW = gql`
  {
    view {
      _id
      viewText
    }
  }
`;

export const QUERY_WAVES = gql`
  {
    waves {
      _id
      waveBody
    }
  }
`;
export const Query_Auth = gql`
  {
    Auth {
      token
      user
    }
  }
`;
