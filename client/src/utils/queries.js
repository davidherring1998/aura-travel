import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _ID
      userName
    }
  }
`;
export const QUERY_VIEW = gql`
  {
    view {
      _ID
      viewText
    }
  }
`;

export const QUERY_WAVES = gql`
  {
    waves {
      _ID
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
