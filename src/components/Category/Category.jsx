import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../Hooks/Hooks";
import { useEffect } from "react";
const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="category-main-contain">
      <div className="layout">
        <div className="category-title">
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          }
        </div>
        <Products products={data} props={true} />
      </div>
    </div>
  );
};

export default Category;
