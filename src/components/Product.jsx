import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({ product, addToCart,}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/286/180" />
      <Card.Body>
        <Card.Title>Prod1</Card.Title>
        <Card.Text>Price: {product.price}$</Card.Text>
        <Card.Text>Stock: {product.stock}</Card.Text>
        <Card.Text>Size: {product.size}</Card.Text>
        <Card.Text>
          Description: {product.description.substr(0, 20) + "..."}
        </Card.Text>
        <Button onClick={() => addToCart(product)} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
