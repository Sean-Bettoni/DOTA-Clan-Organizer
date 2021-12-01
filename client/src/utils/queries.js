import { gql } from '@apollo/client';
// Query is used to fetch data

export const QUERY_GETSESSIONCARDS = gql `
query getSessionCards($SessionCardId: ID!) {
    sessionCards(SessionCardId: $SessionCardId) {
        _id
        gameType
        requiredRoles
        startTime
    }
}`

export const QUERY_GETUSER = gql `
query getuser($UserId: ID!) {
    user(UserId: $UserId) {
        username
    }
}`




// import { gql } from '@apollo/client';

// export const QUERY_GETSESSIONCARD = gql `
// query getSessionCard($SessionCardId: ID!) {
//     activeSessions(SessionCardId: $SessionCardId) {
//         _id
//         gameType
//         requiredRoles
//         startTime
//     }
// }`

// export const QUERY_GETUSER = gql `
// query getuser($UserId: ID!) {
//     user(UserId: $UserId) {
//         username
//     }
// }`