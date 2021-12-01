import { gql } from '@apollo/client';
// Mutation is used to insert/update/delete data

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SESSION_CARD = gql`
  mutation createSessionCard($gameType: String!, $requiredRoles: String!, $startTime: String!) {
    createSessionCard(gameType: $gameType, requiredRoles: $requiredRoles, startTime: $startTime){
        _id
        gameType
        requiredRoles
        startTime
      }
    }
`;
