import {gql} from 'graphql-tag'

export const USERS_QUERY = gql`
  query getUsers {
    users {
      id
      email
    }
  }
`
