import { Auth } from 'aws-amplify';
import { CognitoUserExt } from '~/types';

const _getAuthenticatedUser = async (): Promise<CognitoUserExt> => {
  return await Auth.currentAuthenticatedUser({ bypassCache: true });
};

export { _getAuthenticatedUser };
