import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css'

export const ItemCount = ({stock, initial}) => {
    const [quantity, setState] = useState(initial);
    const [cart, setCart] = useState([]);
    return (
      <div className="margin-v">
        <Button
          className="button"
          variant="secondary"
          onClick={() => {
            if (quantity > 1) {
              setState(quantity - 1);
            }
          }}
        >
          -
        </Button>
        <span className="margin-h">{quantity}</span>
        <Button
          variant="secondary"
          className="button"
          onClick={() => {
            if (quantity < stock) {
              setState(quantity + 1);
            }
          }}
        >
          +
        </Button>

        <Button
          className="margin-h"
          variant="outline-primary"
          onClick={onAdd}
          disabled={stock > 0 ? false : true}
        >
          Add to Cart
        </Button>
        <p className="alert-danger margin-v">{stock === 0 ? "WO stock" : ""}</p>
        {cart.length ? (
          <Link to={'/cart'}>
            <Button
              className="margin-h"
              variant="info"
            >
                Checkout
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
    function onAdd() {
        setCart([...cart, { id: 1, name: "test", quantity: quantity }]);
    }
};


