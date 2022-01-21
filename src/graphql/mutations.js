/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompetitor = /* GraphQL */ `
  mutation CreateCompetitor(
    $input: CreateCompetitorInput!
    $condition: ModelCompetitorConditionInput
  ) {
    createCompetitor(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCompetitor = /* GraphQL */ `
  mutation UpdateCompetitor(
    $input: UpdateCompetitorInput!
    $condition: ModelCompetitorConditionInput
  ) {
    updateCompetitor(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompetitor = /* GraphQL */ `
  mutation DeleteCompetitor(
    $input: DeleteCompetitorInput!
    $condition: ModelCompetitorConditionInput
  ) {
    deleteCompetitor(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const createOpportunity = /* GraphQL */ `
  mutation CreateOpportunity(
    $input: CreateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    createOpportunity(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateOpportunity = /* GraphQL */ `
  mutation UpdateOpportunity(
    $input: UpdateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    updateOpportunity(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteOpportunity = /* GraphQL */ `
  mutation DeleteOpportunity(
    $input: DeleteOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    deleteOpportunity(input: $input, condition: $condition) {
      name
      id
      createdAt
      updatedAt
    }
  }
`;
export const createConnection = /* GraphQL */ `
  mutation CreateConnection(
    $input: CreateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    createConnection(input: $input, condition: $condition) {
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
export const updateConnection = /* GraphQL */ `
  mutation UpdateConnection(
    $input: UpdateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    updateConnection(input: $input, condition: $condition) {
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
export const deleteConnection = /* GraphQL */ `
  mutation DeleteConnection(
    $input: DeleteConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    deleteConnection(input: $input, condition: $condition) {
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
