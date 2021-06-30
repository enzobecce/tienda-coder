import { Item } from "../ItemComponent";
import { useState, useEffect } from "react";
import { getData } from "../../../utils/utils";

export const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const waitData = async () => {
        let data =  await getData(2);
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
  return (
    <>
      {products.map((element, index) => {
          return <Item key={index} products={element} />;
      })}
    </>
  );
};
