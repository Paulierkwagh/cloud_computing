const express = require('express');
const app = express();
app.use(express.json());

const orders = [];

// Get all orders
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Create a new order
app.post('/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.status(201).json(order);
});

app.listen(3002, () => {
  console.log('Order Service is running on port 3002');
});
