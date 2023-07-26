import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getCar } from '~/graphql/queries';
import { Car, CreateCarInput, UpdateCarInput } from '~/API';
import { createCar, updateCar } from '~/graphql/mutations';
import { CognitoUserExt } from '~/types';

const _createDriverCar = async (currentUser: CognitoUserExt) => {
  //Mock dummy car since we don't want an interface to register new cars
  const newCarInput: CreateCarInput = {
    id: currentUser.attributes.sub,
    type: 'UberX',
    uri: 'assets/images/UberX.jpeg',
    isAvailable: false,
  };
  try {
    await API.graphql(graphqlOperation(createCar, { input: newCarInput }));
  } catch (err) {
    console.log('Error Services -> createDriverCar: ', err);
  }
};

const _getDriverCarByUserId = async (
  currentUser: CognitoUserExt,
): Promise<Car | undefined> => {
  try {
    const response = (await API.graphql(
      graphqlOperation(getCar, { id: currentUser.attributes.sub }),
    )) as GraphQLResult<{ getCar: Car }>;
    if (response.data?.getCar) {
      return response.data?.getCar;
    } else {
      await _createDriverCar(currentUser);
      return _getDriverCarByUserId(currentUser);
    }
  } catch (err) {
    console.log('Error Services -> getDriverCarByUserId: ', err);
  }
};

const _updateDriverCar = async (currentCar: UpdateCarInput): Promise<void> => {
  /**
     * You do not have to pass in createdAt and updatedAt fields,
     * AppSync manages this for you.
    If you pass in extra input fields not expected by the AppSync schema, this query will fail. 
    You can see this in the error field returned by the query
    (the query itself does not throw, per GraphQL design).
    */
  try {
    await API.graphql(graphqlOperation(updateCar, { input: currentCar }));
  } catch (err) {
    console.log('Error Services -> updateCar: ', err);
  }
};

export { _createDriverCar, _getDriverCarByUserId, _updateDriverCar };
