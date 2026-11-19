import { products } from "./storage";
import { displayTable } from "./table";

import {
  createIcons,
  Plus,
  Pencil,
  Trash2,
  Search,
  X,
  Package,
  PackageOpen,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from "lucide";

createIcons({
  icons: {
    Plus,
    Pencil,
    Trash2,
    Search,
    X,
    Package,
    PackageOpen,
    RotateCcw,
    ArrowUp,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
  },
});

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
}

const newProduct = products.map((param) => new Product(param));

displayTable(newProduct);
