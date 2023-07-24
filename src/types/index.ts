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

export type { CarType, Car };
