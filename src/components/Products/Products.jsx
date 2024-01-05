import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ products, props, HeadingText }) => {
  return (
    <div className="products-container">
      {!props && <div className="sec-heading">{HeadingText}</div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
