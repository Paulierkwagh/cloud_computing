const express = require('express');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.listen(3001, () => {
  console.log('Product Service is running on port 3001');
});
