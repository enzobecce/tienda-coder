module.exports = {
  getData: async function (quantity, query) {
    if (typeof quantity === "number") {
      const arr = [];
      for (let i = 1; i <= quantity; i++) {
        arr.push(i);
      }
      const products = arr.toString();
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${products}`
      );
      const data = response.json();
      return data;
    }
  },
  getOne: async function (id) {
    if (typeof id === "number") {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = response.json();
      return data;
    }
  }
};