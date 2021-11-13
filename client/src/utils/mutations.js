import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!) {
    addUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_SESSION_CARD = gql`
  mutation createSessionCard($gameType: String!, $requiredRoles: String!, $startTime: String!) {
    createSessionCard(gameType: $gameType, requiredRoles: $requiredRoles, startTime: $startTime){
        _id
        gameType
        requiredRoles
        startTime
      }
    }
`;

