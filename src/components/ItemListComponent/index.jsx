import { Card, Button } from "react-bootstrap";
import './styles.css';

export const ItemList = () => {
    return (
        <div className = 'margin'>
            <Card style={{ width: '18rem' }}>
            <Card.Img className = 'image' variant="top" src="./images/product-example.png" />
            <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Text className = 'text-secondary'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa fugit voluptate similique saepe nam quia nesciunt est veniam maiores deleniti quos quis, cumque repellendus ad dolor aspernatur ipsam! Obcaecati, nesciunt!
                </Card.Text>
                <p>$ 100</p>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
            </Card>
        </div>
    )
}