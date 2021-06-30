module.exports = {
    getData: async function (quantity) {
        if (typeof quantity === 'number') {
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
    }
}