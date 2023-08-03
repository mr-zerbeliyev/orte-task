import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css";

function Product({ product, addToCart }) {
  return (
    <Card className="product" style={{ width: "18rem" }}>
      <Card.Img
        className="cartimg"
        variant="top"
        src="https://picsum.photos/286/180"
      />
      <Card.Body>
        <div className="text">
          <Card.Title className="product_title" >Product</Card.Title>
          <Card.Text>Price: {product.price}$</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
          <Card.Text>Size: {product.size}</Card.Text>
          <Card.Text>
            Description: {product.description.substr(0, 20) + "..."}
          </Card.Text>
        </div>

        <Button className="product_button" onClick={() => addToCart(product)} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
