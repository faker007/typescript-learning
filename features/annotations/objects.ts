const profile = {
  name: 'GyeJin',
  age: 25,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(targetAge: number): void {
    this.age = targetAge;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
