import { useEffect, useContext } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/appApi";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = async () => {
    await fetchDataFromApi(
      "/api/products?populate=*" // for pagination (&pagination[start]=0&pagination[limit]=12)
    ).then((res) => {
      setProducts(res);
    });
  };
  const getCategories = async () => {
    await fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-container">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} HeadingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
