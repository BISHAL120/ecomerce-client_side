import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../Hooks/Hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-model">
      <div className="form-field">
        <input
          value={query}
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="Search For products"
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate(`product/${item.id}`);
                setShowSearch(false);
              }}
              className="search-result-item"
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img?.data[0]?.attributes?.url
                  }
                  alt=""
                />
              </div>
              <div className="prod-detail">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.Desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
