# Furniture Landing Page

A full-stack furniture e-commerce landing page built with:

- **Frontend:** React + Vite (SPA) for both customer-facing pages and an admin dashboard.
- **Backend:** Node.js / Express REST API with a simple JSON file data store and email utilities.

> Repository: https://github.com/DangHuuLong/Furniture-Landing-Page  

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
   - [Customer UI](#customer-ui)
   - [Admin Dashboard](#admin-dashboard)
   - [Backend API](#backend-api)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Getting Started](#getting-started)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
6. [Development Notes](#development-notes)
7. [Possible Improvements](#possible-improvements)
8. [License](#license)

---

## Overview

**Furniture Landing Page** is a practice/portfolio project for a furniture store:

- A **customer site** that shows furniture collections, product details, cart and checkout flow, blog and contact pages.
- An **admin interface** for managing products, categories, coupons, customers, orders, reports and knowledge base.
- A lightweight **Node.js backend** that exposes REST endpoints for auth, products and blogs, reading/writing data from a JSON file and sending emails.

The repository is organized as a **monorepo** with separate `backend` and `frontend` folders.

---

## Features

### Customer UI

Located mainly under `frontend/src/modules/customer`:

- **Home page**
  - Hero section, featured collections and inspirations.
  - Product highlights and brand/collection sections.

- **Shop**
  - Product list page with cards, images and basic filtering UI.
  - Single product page with details, description, related products and tabbed content.

- **Cart & Checkout**
  - Cart sidebar and full cart page.
  - Checkout page with order summary and customer information form.

- **Blog**
  - Blog listing page with preview cards.

- **Contact**
  - Contact page with form and store information.

> Most of these are implemented as React components & pages; you can connect them to any backend or e-commerce platform.

### Admin Dashboard

Located under `frontend/src/modules/admin`:

- **Dashboard**
  - Overview cards for sales, orders, customers and top products.
  - Charts and stats components (bar chart, line chart, circular progress, etc.).

- **Catalog Management**
  - Product pages: add product, list products, SEO settings, tags, categories.
  - Category pages: list, details and visibility controls.

- **Marketing**
  - Coupon pages: coupon types, create coupon, table with filters.

- **Customers**
  - Customer list, detail page and order history.

- **Orders**
  - Order list and order details table.

- **Reports**
  - Various report pages (age distribution, customer growth, store funnel, visits by device, etc.) with reusable report components.

- **Settings & Knowledge Base**
  - Global settings and pricing card.
  - Personal settings (profile, notifications).
  - Knowledge base with getting-started and FAQ-style pages.
  - Inbox pages for message list and chat content.

These screens are mostly **UI-focused**, designed to demonstrate how an internal admin panel for an e-commerce store could look.

### Backend API

Located under `backend/src`:

- **Auth**
  - `controllers/auth_controller.js`
  - `routes/auth_route.js`
  - Handles authentication-related endpoints (login, and optionally register / password actions depending on your implementation).

- **Products**
  - `controllers/products_controller.js`
  - `routes/products_route.js`
  - Endpoints for listing and managing products using the JSON data file.

- **Blogs**
  - `controllers/blogs_controller.js`
  - `routes/blogs_route.js`
  - Endpoints for blog posts.

- **Data Access**
  - `utils/read_database.js` and `utils/write_database.js`
  - Read and write from **`db.json`** as a lightweight “database”.

- **Mail**
  - `utils/mailer.js`
  - Utility for sending emails (for example, contact form or notifications).

- **App Entry**
  - `app.js` – Express app configuration (middleware, routes).
  - `index.js` – Backend entry point that starts the HTTP server.

> Note: this backend is intentionally simple and file-based (using `db.json`) so it is easy to run and understand.

---

## Tech Stack

### Frontend

- **React** (JSX components)
- **Vite** for bundling and dev server
- **React Router** (used for navigating between pages/modules)
- Plain **CSS** modules/files for styling (see `App.css`, `index.css`)
- Custom component architecture:
  - `components/` shared components
  - `layouts/` for layout wrappers
  - `contexts/` for app-wide state (auth/cart/theme etc., depending on implementation)
  - `modules/` for feature-based organization (admin, auth, customer)

### Backend

- **Node.js**
- **Express** HTTP server
- File-based storage with `db.json`
- Email sending utility in `src/utils/mailer.js`
- Environment configuration via `.env`

---

## Project Structure

High-level layout:

```text
Furniture-Landing-Page/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth_controller.js
│   │   │   ├── blogs_controller.js
│   │   │   └── products_controller.js
│   │   ├── routes/
│   │   │   ├── auth_route.js
│   │   │   ├── blogs_route.js
│   │   │   └── products_route.js
│   │   ├── utils/
│   │   │   ├── mailer.js
│   │   │   ├── read_database.js
│   │   │   └── write_database.js
│   │   ├── app.js
│   │   └── index.js
│   ├── db.json
│   ├── package.json
│   └── .env
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── App.jsx
    │   │   ├── App.css
    │   │   └── main.jsx
    │   ├── assets/
    │   ├── contexts/
    │   ├── layouts/
    │   ├── modules/
    │   │   ├── admin/
    │   │   ├── Auth/
    │   │   └── customer/
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    └── index.html
Getting Started
Prerequisites
Node.js (LTS version recommended)

npm or pnpm / yarn

Backend Setup
Go to the backend folder:

cd backend
Install dependencies:

npm install
Configure environment variables:

Copy .env if an example file exists, or create your own .env.

Typical values include:

Server port

Email service credentials (for mailer.js)

Any secrets used by auth logic

Start the backend server (check backend/package.json for exact scripts):

# Development (commonly)
npm run dev

# or, if only "start" is defined
npm start
By default the API usually runs on something like http://localhost:3000 or http://localhost:5000 — update the frontend config if needed.

Frontend Setup
Open a new terminal and go to the frontend folder:

cd frontend
Install dependencies:

npm install
Start the Vite dev server:

npm run dev
Open the URL printed in the console (commonly http://localhost:5173) in your browser.

Make sure any API base URL used in the frontend (for example, in a config file or context) points to your running backend.

Development Notes
The frontend uses the standard Vite React scripts:

npm run dev      # start dev server
npm run build    # build for production
npm run preview  # preview production build
npm run lint     # run ESLint (if configured)
The component tree under frontend/src/modules is organized by feature:

admin/ for dashboard & management pages.

Auth/ for login/signup/forgot-password.

customer/ for the storefront (Home, Shop, SingleProduct, Cart, Checkout, Contact, Blog).

The backend routes are registered in src/app.js. If you add new controllers, remember to:

Create a route file in src/routes.

Register the new router in app.js.

Implement data reading/writing using read_database.js and write_database.js.

Possible Improvements
Some ideas if you want to extend this project:

Replace db.json with a real database (PostgreSQL, MySQL, MongoDB, etc.).

Add real authentication with JWT or session cookies.

Connect admin actions (create product, coupon, etc.) to the backend API.

Integrate a payment gateway mock or real provider.

Add tests (Jest / React Testing Library, supertest for backend).

Deploy frontend (e.g. Vercel/Netlify) and backend (Render/ Railway / VPS).

License
This project currently does not define a license.
Until a license is added, all rights are reserved by the author.


Nếu bạn muốn mình tinh chỉnh thêm (ví dụ ghi rõ PORT thật, đường base URL API, hay mô tả chi tiết từng endpoint `/auth`, `/products`, `/blogs`), bạn có thể gửi thêm 1–2 file controller/route và mình sẽ update README cho khớp 100%.
::contentReference[oaicite:0]{index=0}
Nếu bạn muốn mình tinh chỉnh thêm (ví dụ ghi rõ PORT thật, đường base URL API, hay mô tả chi tiết từng endpoint `/auth`, `/products`, `/blogs`), bạn có thể gửi thêm 1–2 file controller/route và mình sẽ update README cho khớp 100%.
::contentReference[oaicite:0]{index=0}
