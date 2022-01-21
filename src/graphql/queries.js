/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompetitor = /* GraphQL */ `
  query GetCompetitor($id: ID!) {
    getCompetitor(id: $id) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCompetitors = /* GraphQL */ `
  query ListCompetitors(
    $filter: ModelCompetitorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompetitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOpportunity = /* GraphQL */ `
  query GetOpportunity($id: ID!) {
    getOpportunity(id: $id) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listOpportunities = /* GraphQL */ `
  query ListOpportunities(
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConnection = /* GraphQL */ `
  query GetConnection($id: ID!) {
    getConnection(id: $id) {
      competitor
      opportunity
      challenge
      strategy
      id
      createdAt
      updatedAt
    }
  }
`;
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        competitor
        opportunity
        challenge
        strategy
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
