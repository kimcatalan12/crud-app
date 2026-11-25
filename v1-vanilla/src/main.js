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
    this.price = Number(price);
    this.qty = qty;
  }

  formatPrice() {
    return this.price.toLocaleString("en-PH", { style: "currency", currency: "PHP" });
  }
}

const productList = products.map((productDetails) => new Product(productDetails));

renderProductsTable(productList);