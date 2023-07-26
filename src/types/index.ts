import { CognitoUser } from '@aws-amplify/auth';
import { LatLng } from 'react-native-maps';

type CarType = 'UberX' | 'UberXL' | 'Comfort';

type Car = {
  id: string;
  type: CarType;
  uri: string;
  latitude: number;
  longitude: number;
  heading: number;
};

type MapDirectionProps = {
  coordinates?: LatLng[];
  distance: number;
  duration: number;
};
type UserAttributes = {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  updated_at: string;
  'custom:bytesQuota': string;
  'custom:bytesUsed': string;
};
/*
 * The following interface extends the CognitoUser type because it has issues
 * (see github.com/aws-amplify/amplify-js/issues/4927). Eventually (when you
 * no longer get an error accessing a CognitoUser's 'attribute' property) you
 * will be able to use the CognitoUser type instead of CognitoUserExt.
 */
interface CognitoUserExt extends CognitoUser {
  attributes: UserAttributes;
}

export type { CarType, Car, CognitoUserExt, MapDirectionProps };
