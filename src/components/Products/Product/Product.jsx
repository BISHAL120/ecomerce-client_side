import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/product/${id}`)} className="product-card">
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt="product images"
        />
      </div>
      <div className="prod-detail">
        <span className="name">{data.title}</span>
        <span className="price">{data.Price}&#2547;</span>
      </div>
    </div>
  );
};

export default Product;
