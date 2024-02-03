import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";
import { itemData } from '../components/ShoppingList';
test("displays all items when initially rendered", () => {
  render(<ShoppingList />);
  const itemList = screen.getAllByRole("listitem");
  expect(itemList).toHaveLength(itemData.length);
});

test("displays only items that match the selected category", () => {
  render(<ShoppingList />);
  const selectElement = screen.getByRole("combobox");

  // Change the category to "Dairy"
  fireEvent.change(selectElement, { target: { value: "Dairy" } });

  const dairyItemList = screen.getAllByRole("listitem");
  const dairyItems = itemData.filter((item) => item.category === "Dairy");
  expect(dairyItemList).toHaveLength(dairyItems.length);
});
