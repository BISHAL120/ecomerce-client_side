import React, { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { fetchDataFromApi } from "../../utils/appApi";
import Category from "./Category/Category";
import "./Categories.scss";

const Categories = () => {
  const { categories, setCategories } = useContext(Context);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    await fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  return (
    <div className="main-container">
      <h1> Categories</h1>
      <Category categories={categories} />
    </div>
  );
};

export default Categories;
