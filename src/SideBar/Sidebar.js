import "./Sidebar.css";
import { FaCartShopping } from "react-icons/fa6";
import Categories from "./Categories/Categories";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

function Sidebar({ handleCategory, handleColor, handlePrice }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <FaCartShopping />
          </h1>
        </div>
        <Categories handleCategory={handleCategory} />
        <Price handlePrice={handlePrice} />
        <Colors handleColor={handleColor} />
      </section>
    </>
  );
}

export default Sidebar;
