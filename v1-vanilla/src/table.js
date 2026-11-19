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

// generate HTML

export function displayTable(param) {
  let generateHtml = ``;

  param.forEach((value) => {
    const { name, sku, category, price, qty } = value;
    generateHtml += `<tr class="hover:bg-base-200">
                            <td class="font-medium">${name}</td>
                            <td>${sku}</td>
                            <td><span class="badge badge-soft badge-primary">${category}</span></td>
                            <td>${price}</td>
                            <td>${qty}</td>
                            <td>
                                <div class="flex justify-end gap-1">
                                    <button class="btn btn-ghost btn-sm btn-square js-edit-button" data-product-id="1" aria-label="Edit ${name}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="pencil" aria-hidden="true" class="lucide lucide-pencil size-4"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                                    </button>
                                    <button class="btn btn-ghost btn-sm btn-square text-error js-delete-button" data-product-id="1" aria-label="Delete ${name}">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash-2" aria-hidden="true" class="lucide lucide-trash-2 size-4"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>`;
  });

  document.querySelector(".js-products-table").innerHTML = generateHtml;
}
