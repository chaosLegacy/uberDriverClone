import { CognitoUser } from '@aws-amplify/auth';

type CarType = 'UberX' | 'UberXL' | 'Comfort';

type Car = {
  id: string;
  type: CarType;
  uri: string;
  latitude: number;
  longitude: number;
  heading: number;
};
//TODO temp type to remove when implementing AWS amplify to get from API
type UserInput = {
  id?: string | null;
  name: string;
  username: string;
  email: string;
  rating: string;
};
export type OrderInput = {
  id?: string | null;
  userId: string;
  carId?: string | null;
  type: string;
  originLat: number;
  originLong: number;
  destLat: number;
  destLong: number;
  user: UserInput;
  createdAt?: string | null;
  distance?: number;
  duration?: number;
  pickedUp?: boolean;
  reached?: boolean;
  accept?: boolean;
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

export type { CarType, Car, CognitoUserExt };
