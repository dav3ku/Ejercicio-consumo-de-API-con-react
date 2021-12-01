let URLBase = "https://swapi.dev/api/people";

const getAllPeople = () => {
  return fetch(URLBase).then((result) => result.json());
};

export default getAllPeople;
