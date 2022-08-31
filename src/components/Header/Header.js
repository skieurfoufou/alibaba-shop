import "./Header.css";
import React from "react";

export default function Header({
  products,
  onChangeFilter,
  onCartClick,
  itemsCounter,
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

          <select onChange={onChangeFilter}>
            <option value="all">All</option>
            {categories.map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
            ;
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
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
