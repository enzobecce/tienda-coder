import { Item } from "../ItemComponent";
import { useState, useEffect } from "react";
import { getData } from "../../../utils/utils";
import { useParams } from "react-router";

export const ItemList = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().id;
    useEffect(() => {
      const waitData = async () => {
        let data =  await getData(10);
         let aux = data.map((element) => {
           return {
             id: element.id,
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
    }, [category]);
  return (
    <>
      {products.map((element, index) => {
          return <Item key={index} products={element} />;
      })}
    </>
  );
};
