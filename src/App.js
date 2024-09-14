import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import "./index.css";
import products from "./db/data";
import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (products) =>
      products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  const handleCategory = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };

  const handlePrice = (event) => {
    setSelectedPrice(event.target.value);
    console.log(event.target.value);
  };

  const handleColor = (event) => {
    setSelectedColor(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCompany(event.target.value);
    console.log(event.target.value);
  };

  function filteredData(
    products,
    selCategory,
    query,
    selCompany,
    selPrice,
    selColor
  ) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selCompany) {
      filteredProducts = filteredProducts.filter(
        ({ company }) => company === selCompany
      );
    }
    if (selCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) => category === selCategory
      );
    }
    if (selPrice) {
      filteredProducts = filteredProducts.filter(
        ({ newPrice }) => newPrice === selPrice
      );
    }
    if (selColor) {
      filteredProducts = filteredProducts.filter(
        ({ color }) => color === selColor
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(
    products,
    selectedCategory,
    query,
    selectedCompany,
    selectedPrice,
    selectedColor
  );

  return (
    <>
      <Sidebar
        handleCategory={handleCategory}
        handleColor={handleColor}
        handlePrice={handlePrice}
      />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
