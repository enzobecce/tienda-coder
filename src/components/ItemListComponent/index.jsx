import { Card } from "react-bootstrap";
import './styles.css';
import { ItemCount } from "./CounterComponent";

export const ItemList = ({product}) => {
    return (
      <div className="margin">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="image"
            variant="top"
            src="./images/product-example.png"
          />
          <Card.Body>
            <Card.Title>Product Title</Card.Title>
            <Card.Text className="text-secondary">
              {product.description}
            </Card.Text>
            <p>$ {product.price}</p>
            <ItemCount stock = {product.stock} initial = {3} />
          </Card.Body>
        </Card>
      </div>
    );
}