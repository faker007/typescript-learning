const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuple vs. Object
const carSpecs: [number, number] = [400, 3354];

const carstats = {
  horsepower: 400,
  weight: 3554,
};
