const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

let bills = [];

// Get all bills
app.get("/bills", (req, res) => {
  res.json(bills);
});

// Add a bill
app.post("/bills", (req, res) => {
  const newBill = req.body;
  bills.push(newBill);
  res.status(201).send("Bill added successfully");
});

// Update a bill
app.put("/bills/:id", (req, res) => {
  const id = req.params.id;
  const updatedBill = req.body;
  bills[id] = updatedBill;
  res.send("Bill updated successfully");
});

// Delete a bill
app.delete("/bills/:id", (req, res) => {
  const id = req.params.id;
  bills.splice(id, 1);
  res.send("Bill deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
