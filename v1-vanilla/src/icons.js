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

// ? turns every <i data-lucide="..."> on the page into an <svg> icon
// * call again after rendering new HTML (ex: table rows)
export function renderIcons() {
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
}
