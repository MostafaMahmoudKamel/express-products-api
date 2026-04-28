# 📦 Products API (Express.js)

A simple RESTful API built with **Node.js** and **Express** to manage products.
Data is stored locally in a `products.json` file using the `fs` module.

---

## 🚀 Features

* Get all products
* Get a single product by ID
* Create a new product
* Update an existing product
* Middleware to validate product existence
* Data persistence using a JSON file

---

## 📁 Project Structure

```
project/
│
├── controllers/
│   └── productControl.js   # Business logic (controllers + middleware)
│
├── routes/
│   └── productRoutes.js    # API routes
│
├── products.json           # Fake database
│
└── app.js                  # Main Express app
```

---

## 🧠 How It Works

### 🔹 Router (`productRoutes.js`)

Defines API endpoints and connects them to controller functions.

* `GET /` → Get all products
* `POST /` → Create a product
* `GET /:id` → Get a specific product
* `PATCH /:id` → Update a product (with middleware)
* `DELETE /:id` → Delete a product

Middleware `checkProduct` is used before some routes to ensure the product exists.

---

### 🔹 Controllers (`productControl.js`)

Handles the core logic:

#### 1. Get All Products

Returns all products with their count.

#### 2. Create Product

* Reads request body
* Generates a new ID
* Saves to `products.json`

#### 3. Update Product

* Uses `req.product` from middleware
* Updates `name` and `price`
* Writes changes to file

#### 4. Get Single Product

Returns the product found by middleware.

#### 5. Delete Product

(Not implemented yet)

---

### 🔹 Middleware: `checkProduct`

* Extracts `id` from request params
* Searches for the product
* If not found → returns 404 error
* If found → attaches product to `req.product`

```js
req.product = product;
```

This allows reuse of the found product in other controllers.

---

## 💾 Data Storage

Products are stored in a local file:

```
products.json
```

Example:

```json
[
  { "id": 1, "name": "cheese", "price": 1000 },
  { "id": 2, "name": "Rice", "price": 500 }
]
```

---

## ⚠️ Notes

* Data is **not persistent in production** (file-based storage)
* `fs.writeFileSync` is used → blocks the event loop (not recommended for large apps)
* No validation on input data yet
* DELETE endpoint is not implemented

---

## 🛠️ Improvements (Next Steps)

* Add DELETE functionality
* Add validation (e.g., using Joi or express-validator)
* Replace JSON file with a real database (MongoDB / PostgreSQL)
* Add error handling middleware
* Use async file operations

---

## ▶️ Run the Project

```bash
npm install
node app.js
```

---

## 📌 Summary

This project demonstrates:

* Routing with Express
* Controllers separation
* Middleware usage
* Basic CRUD operations
* File-based data persistence

A solid starting point for learning backend development 🚀
# express-products-api
