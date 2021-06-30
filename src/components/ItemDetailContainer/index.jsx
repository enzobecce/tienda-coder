import { Card, Row, Container, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {ItemCount} from '../ItemListContainer/CounterComponent';
import { getData } from "../../utils/utils.js";
import './styles.css'

export const ItemDetail = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const waitData = async () => {
      let data = await getData(1);
      let aux = {
          title: data.name,
          description: data.gender,
          image: data.image,
          price: data.id,
          stock: data.id + 2,
        };
      setProducts(aux);
    };
    waitData();
  }, []);
  return (
    <>
      <Card>
        <Container className = 'margin'>
          <Row>
            <Col lg={true}>
              <Card.Img
                className="d-block w-100"
                variant="top"
                src={products.image}
              />
            </Col>
            <Col lg={true}>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text className="text-secondary">
                  {products.description}
                </Card.Text>
                <p>$ {products.price}</p>
                <ItemCount stock={products.stock} initial={3} />
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};