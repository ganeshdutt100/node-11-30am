const express = require("express");
const app = express();

app.use(express.json());

const mobiles = [
  { id: 1, brand: "Apple", color: "Black" },
  { id: 2, brand: "Samsung", color: "White" },
  { id: 3, brand: "OnePlus", color: "Red" },
  { id: 4, brand: "Google", color: "Blue" },
  { id: 5, brand: "Xiaomi", color: "Green" },
];
app.get("/api/mobiles", (req, res) => {
  const { brand } = req.query;
  if (!brand) return res.json(mobiles);
  const selectBrand = Array.isArray(brand) ? brand : [brand];

  const filterBrand = mobiles.filter((m) => selectBrand.includes(m.brand));

  res.json(filterBrand);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
// multi value  =  []
