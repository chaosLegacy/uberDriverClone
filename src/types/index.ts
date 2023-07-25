type CarCommune = {
  id: string;
  type: string;
  uri: string;
};

interface CarType extends CarCommune {
  price: number;
  duration: number;
}

interface Car extends CarCommune {
  latitude: number;
  longitude: number;
  heading: number;
}
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

export type { CarType, Car };
