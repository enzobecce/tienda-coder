import { Card, Row, Container, Col } from "react-bootstrap";
import { ItemCount } from "../../ItemListContainer/CounterComponent";

export const Detail = ({product}) => {
  return (
    <>
      <Card>
        <Container className="margin">
          <Row>
            <Col lg={true}>
              <Card.Img
                className="d-block w-100"
                variant="top"
                src={product.image}
              />
            </Col>
            <Col lg={true}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="text-secondary">
                  {product.description}
                </Card.Text>
                <p>$ {product.price}</p>
                <ItemCount stock={product.stock} initial={3} />
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
