export const getWeather = (zipCode) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!getWeatherCache[zipCode]) {
        getWeatherCache[zipCode] = randomIntBetween(5, 35);
      } else {
        getWeatherCache[zipCode] += randomIntBetween(-1, 2);
      }

      resolve(getWeatherCache[zipCode]);
    }, randomIntBetween(500, 3000));
  });
};

const getWeatherCache = {};

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
