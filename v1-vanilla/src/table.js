import { renderIcons } from "./icons";

// button modal part
const productModal = document.querySelector(".js-product-modal");
const deleteModal = document.querySelector(".js-delete-modal");

// ? showModal() is built into <dialog>, daisyUI only styles it
document.querySelector(".js-add-button").addEventListener("click", () => {
  productModal.showModal();
});

document.querySelectorAll(".js-edit-button").forEach((button) => {
  button.addEventListener("click", () => {
    productModal.showModal();
  });
});

document.querySelectorAll(".js-delete-button").forEach((button) => {
  button.addEventListener("click", () => {
    deleteModal.showModal();
  });
});

// show the "No products yet" message only when the list is empty
function renderEmptyState(products) {
  const emptyState = document.querySelector(".js-empty-state");

  if (products.length === 0) {
    emptyState.classList.remove("hidden");
    emptyState.classList.add("flex");
  } else {
    emptyState.classList.add("hidden");
    emptyState.classList.remove("flex");
  }
}

// generate HTML

export function renderProductsTable(products) {
  renderEmptyState(products);

  let productsHTML = "";

  products.forEach((product) => {
    const { name, sku, category, price, qty } = product;
    productsHTML += `<tr class="hover:bg-base-200">
                            <td class="font-medium">${name}</td>
                            <td>${sku}</td>
                            <td><span class="badge badge-soft badge-primary">${category}</span></td>
                            <td>${product.formatCurrency(price)}</td>
                            <td>${qty}</td>
                            <td>
                                <div class="flex justify-end gap-1">
                                    <button class="btn btn-ghost btn-sm btn-square js-edit-button" data-product-id="${sku}" aria-label="Edit ${name}">
                                        <i data-lucide="pencil" class="size-4"></i>
                                    </button>
                                    <button class="btn btn-ghost btn-sm btn-square text-error js-delete-button" data-product-id="${sku}" aria-label="Delete ${name}">
                                        <i data-lucide="trash-2" class="size-4"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
  });

  document.querySelector(".js-products-table").innerHTML = productsHTML;

  // the new rows have <i data-lucide> tags, so turn them into icons
  renderIcons();
}
