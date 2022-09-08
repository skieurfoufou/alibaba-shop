import "./Header.css";
import React from "react";

export default function Header({
  products,
  onChangeFilter,
  onCartClick,
  itemsCounter,
  onChangeSorter,
}) {
  const categories = products
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <nav className="product-filter">
      <h1>ALIBABA SHOP</h1>

      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select onChange={onChangeFilter} className="select-header">
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            ;
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select onChange={onChangeSorter} className="select-header">
            <option value="rating">Best Selling</option>
            <option value="a-z">Alphabetically, A-Z</option>
            <option value="z-a">Alphabetically, Z-A</option>
            <option value="low-to-high">Price, low to high</option>
            <option value="high-to-low">Price, high to low</option>
          </select>
        </div>
      </div>
      <button className="button-cart" onClick={onCartClick}>
        <span role="img" aria-label="cart" aria-labelledby="cart">
          🛒
        </span>{" "}
        {itemsCounter}
      </button>
    </nav>
  );
}
