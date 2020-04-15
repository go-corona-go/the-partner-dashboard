import gql from 'graphql-tag';

export const FETCH_SELLERS_QUERY = gql`
  query {
    sellers {
      id
      email
    }
  }
`;
