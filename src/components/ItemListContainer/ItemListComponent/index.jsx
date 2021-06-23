import { Item } from "../ItemComponent";
import { useState, useEffect } from "react";

export const ItemList = () => {
    const [products, setProducts] = useState([]);

    async function getData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5"
      );
      const data = response.json();
      return data;
    }

    useEffect(() => {
      const waitData = async () => {
        let data =  await getData();
         let aux = data.map((element) => {
           return {
             title: element.name,
             description: element.gender,
             image: element.image,
             price: element.id,
             stock: element.id + 2
           };
         });
        setProducts(aux);
    };
    waitData();
    }, []);

    if (products.length) {
       console.log(products)
    }
  return (
    <>
      {products.map(element => {
          return (
              <Item products={element} />
          )
      })}
    </>
  );
};
