/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  orders?: ModelOrderConnection | null,
  car?: Car | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  userId: string,
  user?: User | null,
  carId?: string | null,
  car?: Car | null,
  type: string,
  status?: string | null,
  originLat: number,
  originLong: number,
  destLat: number,
  destLong: number,
  distance?: number | null,
  duration?: number | null,
  accept?: boolean | null,
  pickedUp?: boolean | null,
  reached?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type Car = {
  __typename: "Car",
  id: string,
  type: string,
  uri: string,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isAvailable?: boolean | null,
  orders?: ModelOrderConnection | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCarInput = {
  id?: string | null,
  type: string,
  uri: string,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isAvailable?: boolean | null,
};

export type ModelCarConditionInput = {
  type?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  heading?: ModelFloatInput | null,
  isAvailable?: ModelBooleanInput | null,
  and?: Array< ModelCarConditionInput | null > | null,
  or?: Array< ModelCarConditionInput | null > | null,
  not?: ModelCarConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCarInput = {
  id: string,
  type?: string | null,
  uri?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  heading?: number | null,
  isAvailable?: boolean | null,
};

export type DeleteCarInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  userId: string,
  carId?: string | null,
  type: string,
  status?: string | null,
  originLat: number,
  originLong: number,
  destLat: number,
  destLong: number,
  distance?: number | null,
  duration?: number | null,
  accept?: boolean | null,
  pickedUp?: boolean | null,
  reached?: boolean | null,
  createdAt?: string | null,
};

export type ModelOrderConditionInput = {
  userId?: ModelIDInput | null,
  carId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  status?: ModelStringInput | null,
  originLat?: ModelFloatInput | null,
  originLong?: ModelFloatInput | null,
  destLat?: ModelFloatInput | null,
  destLong?: ModelFloatInput | null,
  distance?: ModelFloatInput | null,
  duration?: ModelFloatInput | null,
  accept?: ModelBooleanInput | null,
  pickedUp?: ModelBooleanInput | null,
  reached?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOrderInput = {
  id: string,
  userId?: string | null,
  carId?: string | null,
  type?: string | null,
  status?: string | null,
  originLat?: number | null,
  originLong?: number | null,
  destLat?: number | null,
  destLong?: number | null,
  distance?: number | null,
  duration?: number | null,
  accept?: boolean | null,
  pickedUp?: boolean | null,
  reached?: boolean | null,
  createdAt?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCarFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  heading?: ModelFloatInput | null,
  isAvailable?: ModelBooleanInput | null,
  and?: Array< ModelCarFilterInput | null > | null,
  or?: Array< ModelCarFilterInput | null > | null,
  not?: ModelCarFilterInput | null,
};

export type ModelCarConnection = {
  __typename: "ModelCarConnection",
  items:  Array<Car | null >,
  nextToken?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  carId?: ModelIDInput | null,
  type?: ModelStringInput | null,
  status?: ModelStringInput | null,
  originLat?: ModelFloatInput | null,
  originLong?: ModelFloatInput | null,
  destLat?: ModelFloatInput | null,
  destLong?: ModelFloatInput | null,
  distance?: ModelFloatInput | null,
  duration?: ModelFloatInput | null,
  accept?: ModelBooleanInput | null,
  pickedUp?: ModelBooleanInput | null,
  reached?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCarFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  uri?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  heading?: ModelSubscriptionFloatInput | null,
  isAvailable?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCarFilterInput | null > | null,
  or?: Array< ModelSubscriptionCarFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  carId?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  originLat?: ModelSubscriptionFloatInput | null,
  originLong?: ModelSubscriptionFloatInput | null,
  destLat?: ModelSubscriptionFloatInput | null,
  destLong?: ModelSubscriptionFloatInput | null,
  distance?: ModelSubscriptionFloatInput | null,
  duration?: ModelSubscriptionFloatInput | null,
  accept?: ModelSubscriptionBooleanInput | null,
  pickedUp?: ModelSubscriptionBooleanInput | null,
  reached?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCarMutationVariables = {
  input: CreateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type CreateCarMutation = {
  createCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCarMutationVariables = {
  input: UpdateCarInput,
  condition?: ModelCarConditionInput | null,
};

export type UpdateCarMutation = {
  updateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCarMutationVariables = {
  input: DeleteCarInput,
  condition?: ModelCarConditionInput | null,
};

export type DeleteCarMutation = {
  deleteCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCarQueryVariables = {
  id: string,
};

export type GetCarQuery = {
  getCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCarsQueryVariables = {
  filter?: ModelCarFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCarsQuery = {
  listCars?:  {
    __typename: "ModelCarConnection",
    items:  Array< {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userId: string,
      carId?: string | null,
      type: string,
      status?: string | null,
      originLat: number,
      originLong: number,
      destLat: number,
      destLong: number,
      distance?: number | null,
      duration?: number | null,
      accept?: boolean | null,
      pickedUp?: boolean | null,
      reached?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIdQuery = {
  ordersByUserId?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userId: string,
      carId?: string | null,
      type: string,
      status?: string | null,
      originLat: number,
      originLong: number,
      destLat: number,
      destLong: number,
      distance?: number | null,
      duration?: number | null,
      accept?: boolean | null,
      pickedUp?: boolean | null,
      reached?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByCarIdAndCreatedAtQueryVariables = {
  carId: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByCarIdAndCreatedAtQuery = {
  ordersByCarIdAndCreatedAt?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      userId: string,
      carId?: string | null,
      type: string,
      status?: string | null,
      originLat: number,
      originLong: number,
      destLat: number,
      destLong: number,
      distance?: number | null,
      duration?: number | null,
      accept?: boolean | null,
      pickedUp?: boolean | null,
      reached?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnCreateCarSubscription = {
  onCreateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnUpdateCarSubscription = {
  onUpdateCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCarSubscriptionVariables = {
  filter?: ModelSubscriptionCarFilterInput | null,
};

export type OnDeleteCarSubscription = {
  onDeleteCar?:  {
    __typename: "Car",
    id: string,
    type: string,
    uri: string,
    latitude?: number | null,
    longitude?: number | null,
    heading?: number | null,
    isAvailable?: boolean | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    carId?: string | null,
    car?:  {
      __typename: "Car",
      id: string,
      type: string,
      uri: string,
      latitude?: number | null,
      longitude?: number | null,
      heading?: number | null,
      isAvailable?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    type: string,
    status?: string | null,
    originLat: number,
    originLong: number,
    destLat: number,
    destLong: number,
    distance?: number | null,
    duration?: number | null,
    accept?: boolean | null,
    pickedUp?: boolean | null,
    reached?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
