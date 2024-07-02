const groceriesList = () => {
  const ress = new Map();
  const objetos = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objetos)) {
    ress.set(key, objetos[key]);
  }
  return ress;
};

export default groceriesList;
