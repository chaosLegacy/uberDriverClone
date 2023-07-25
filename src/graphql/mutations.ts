/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
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
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
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
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
