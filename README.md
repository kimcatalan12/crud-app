# CRUD App

A product list manager. Add, view, edit and delete items, then sort, filter and page through them.

This is project #1 in my learning path. Its features get reused later in my Inventory, POS, HRIS and ERP projects.

**Status:** in progress (v1 setup)

**Live demo:** coming soon on GitHub Pages

<!-- Add a screenshot here once the table works:
![Screenshot of the CRUD App](screenshot.png)
-->

## Versions

The same app is built twice, with the same features but a different place where the data lives.

| Version | Stack | Data lives in | Status |
| --- | --- | --- | --- |
| v1 | HTML, JavaScript, Tailwind CSS, Vite | Browser `localStorage` | In progress |
| v2 | PHP, MySQL (XAMPP) | MySQL table | Not started |

## Features

Planned for v1. Each one gets ticked when it works.

- [ ] **Create:** add-item form with validation (required fields, no duplicate SKU)
- [ ] **Read:** table of items with price shown as ₱ with 2 decimals
- [ ] **Update:** edit an item in the same form
- [ ] **Delete:** delete with a confirm modal
- [ ] **Search and filter:** search by name or number, filter by category
- [ ] **Sorting:** click a column header to sort ascending or descending
- [ ] **Pagination:** 5 / 10 / 20 rows per page with Prev / Next
- [ ] **Saved data:** items survive a page refresh

## How to run v1

You need [Node.js](https://nodejs.org) installed.

```bash
cd v1-vanilla
npm install
npm run dev
```

Then open the link shown in the terminal (usually `http://localhost:5173`).

## Folder structure

```
crud-app/
├─ v1-vanilla/          v1: Vanilla JS + localStorage + Tailwind
│  ├─ index.html
│  ├─ src/
│  │  ├─ main.js        start-up, event listeners
│  │  ├─ storage.js     load/save localStorage
│  │  ├─ table.js       render rows, sort, paginate
│  │  ├─ form.js        add/edit, validation
│  │  └─ input.css      Tailwind import
│  └─ package.json
├─ v2-php-mysql/        v2: PHP + MySQL
│  ├─ public/           index.html, js, built css
│  ├─ api/              products.php: GET, POST, PUT, DELETE
│  ├─ config/db.php     database connection (not committed)
│  └─ database.sql
├─ CRUD App — Plan & Feature Checklist.md
└─ README.md
```

## Plan

The full plan, build order and wireframe are in [CRUD App — Plan & Feature Checklist.md](CRUD%20App%20—%20Plan%20&%20Feature%20Checklist.md).
