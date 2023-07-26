/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      rating
      avatar
      email
      orders {
        nextToken
        __typename
      }
      car {
        id
        type
        uri
        latitude
        longitude
        heading
        isAvailable
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        rating
        avatar
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      uri
      latitude
      longitude
      heading
      isAvailable
      orders {
        nextToken
        __typename
      }
      user {
        id
        username
        name
        rating
        avatar
        email
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        uri
        latitude
        longitude
        heading
        isAvailable
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userId
      user {
        id
        username
        name
        rating
        avatar
        email
        createdAt
        updatedAt
        __typename
      }
      carId
      car {
        id
        type
        uri
        latitude
        longitude
        heading
        isAvailable
        createdAt
        updatedAt
        __typename
      }
      type
      status
      originLat
      originLong
      destLat
      destLong
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        carId
        type
        status
        originLat
        originLong
        destLat
        destLong
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserId = /* GraphQL */ `
  query OrdersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        carId
        type
        status
        originLat
        originLong
        destLat
        destLong
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByCarIdAndCreatedAt = /* GraphQL */ `
  query OrdersByCarIdAndCreatedAt(
    $carId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCarIdAndCreatedAt(
      carId: $carId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        carId
        type
        status
        originLat
        originLong
        destLat
        destLong
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
