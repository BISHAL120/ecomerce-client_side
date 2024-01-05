import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
  const { cartItem, handleRemoveFromCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="cart-products">
      {cartItem.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data[0].attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-detail">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#2547;{item.attributes.Price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
