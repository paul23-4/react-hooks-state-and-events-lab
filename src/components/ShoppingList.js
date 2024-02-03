import React, { useState } from "react";
import Item from "./Item";

export const itemData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  // Add more items as needed
];

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? itemData
      : itemData.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <label htmlFor="categoryFilter">Filter by category:</label>
      <select id="categoryFilter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        {/* Add more categories as needed */}
      </select>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
