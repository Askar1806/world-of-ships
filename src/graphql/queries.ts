import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
  query GetShips {
    vehicles {
      title
      description
      icons {
        large
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;
