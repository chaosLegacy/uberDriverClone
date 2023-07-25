import { Auth } from 'aws-amplify';
import { CognitoUserExt } from '~/types';

const getAuthenticatedUser = async (): Promise<CognitoUserExt> => {
  return await Auth.currentAuthenticatedUser({ bypassCache: true });
};

export { getAuthenticatedUser };
