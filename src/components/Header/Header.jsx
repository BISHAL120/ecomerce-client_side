import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import "./Header.scss";
import Cart from "../Cart/Cart";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
          <div className="center" onClick={goHome}>
            Bishal Ecomerce
          </div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span onClick={() => setCart(true)} className="cart-icon">
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {cart && <Cart setShowCart={setCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
