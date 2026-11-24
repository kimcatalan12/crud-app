import { products } from "./storage";
import { renderProductsTable } from "./table";
import { renderIcons } from "./icons";

renderIcons();

class Product {
  id;
  sku;
  name;
  category;
  price;
  qty;

  constructor({ id, sku, name, category, price, qty }) {
    this.id = id;
    this.sku = sku;
    this.name = name;
    this.category = category;
    this.price = price;
    this.qty = qty;
  }

  formatCurrency(param) {
    return (Math.round(param) / 100).toFixed(2);
  }
}

const productList = products.map((productDetails) => new Product(productDetails));

renderProductsTable(productList);