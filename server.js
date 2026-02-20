const express = require("express");

const app = express();
const PORT =3000

// Middleware (allows JSON)
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// Example GET
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Mary" }
  ]);
});

// Example POST
app.post("/users", (req, res) => {
  const user = req.body;
  res.json({
    message: "User received",
    user
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

  

