import { Card } from "react-bootstrap";
import { ItemCount } from "../CounterComponent";
import './styles.css'

export const Item = ({products}) => {
  return (
    <div className="productCard">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="productImg" variant="top" src={products.image} />
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text className="text-secondary">
            {" "}
            {products.description}{" "}
          </Card.Text>
          <p>$ {products.price}</p>
          <ItemCount stock={products.stock} initial={3} />
        </Card.Body>
      </Card>
    </div>
  );
};
