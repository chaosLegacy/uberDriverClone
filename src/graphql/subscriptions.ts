/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($filter: ModelSubscriptionCarFilterInput) {
    onCreateCar(filter: $filter) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($filter: ModelSubscriptionCarFilterInput) {
    onUpdateCar(filter: $filter) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($filter: ModelSubscriptionCarFilterInput) {
    onDeleteCar(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      userId
      user {
        id
        username
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
      distance
      duration
      accept
      pickedUp
      reached
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      userId
      user {
        id
        username
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
      distance
      duration
      accept
      pickedUp
      reached
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      userId
      user {
        id
        username
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
      distance
      duration
      accept
      pickedUp
      reached
      createdAt
      updatedAt
      __typename
    }
  }
`;
