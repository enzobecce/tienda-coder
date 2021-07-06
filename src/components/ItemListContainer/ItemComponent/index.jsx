import { Card } from "react-bootstrap";
import { ItemCount } from "../CounterComponent";
import './styles.css';
import { Link } from "react-router-dom";

export const Item = ({products}) => {
  return (
    <div className="productCard">
      <Card style={{ width: "18rem" }}>
        <Link to={`/item/${products.id}`}>
          <Card.Img className="productImg" variant="top" src={products.image} />
        </Link>
        <Card.Body>
          <Link to={`/item/${products.id}`}>
            <Card.Title>{products.title}</Card.Title>
          </Link>
          <Card.Text className="text-secondary">
            {products.description}
          </Card.Text>
          <p>$ {products.price}</p>
          <ItemCount stock={products.stock} initial={3} />
        </Card.Body>
      </Card>
    </div>
  );
};
