import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/Hooks";
import { useContext, useState } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);

  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  if (!data) return;
  const product = data.data[0].attributes;
  const categoryID = product.categories.data[0].id;
  const categoryName = product.categories?.data?.[0]?.attributes?.title;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product.img?.data[0]?.attributes?.url
              }
              alt="Product images"
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.Price} &#2547;</span>
            <span className="desc">{product.Desc}</span>
            <div className="cta-button">
              <div className="quantity-button">
                <span
                  onClick={() => {
                    if (quantity === 1) {
                      return 1;
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </span>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>{categoryName}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts categoryID={categoryID} productID={id} />
      </div>
    </div>
  );
};

export default SingleProduct;
