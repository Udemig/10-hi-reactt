import { useSelector } from "react-redux";
import Container from "../components/Container";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  return (
    <Container>
      <h1 className="text-2xl font-bold">SEPET</h1>
    </Container>
  );
};

export default Cart;
