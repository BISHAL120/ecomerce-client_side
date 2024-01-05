import useFetch from "../../../Hooks/Hooks";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryID, productID }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productID}&filters[categories][id]=${categoryID}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="related-products">
      <Products products={data} HeadingText="Related Products" />
    </div>
  );
};

export default RelatedProducts;
