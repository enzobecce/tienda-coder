import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap';
import { getOne } from "../../utils/utils.js";
import { Detail } from "./ItemDetailComponent";
import { useParams } from "react-router-dom";
import './styles.css'

export const ItemDetail = () => {
  const [products, setProducts] = useState([]);
  const id = useParams();
  useEffect(() => {
    const waitData = async () => {
      let data = await getOne(parseInt(id.id));
      let aux = {
          id: data.id,
          title: data.name,
          description: data.gender,
          image: data.image,
          price: data.id,
          stock: data.id + 2,
        };
        setTimeout(()=>{
          setProducts(aux);
        },2000)
    };
    waitData();
  }, [id]);
  return (!(products.length === 0) ? (
      <Detail product={products} />
    ) : (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  )
};