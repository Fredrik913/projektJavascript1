var express = require("express");
var router = express.Router();
const products = [
  {
    id: "svart-tshirt",
    name: "Svart T-shirt",
    price: 199,
    brand: "Levis",
    image: "https://placehold.co/400x600",
  },
  {
    id: "vit-tshirt",
    name: "Vit T-shirt",
    price: 189,
    brand: "H&M",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
  {
    id: "jeans",
    name: "Jeans",
    price: 599,
    brand: "Wrangler",
    image: "https://placehold.co/400x600",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Freaky fashion ",
    test: "Mitt första test",
    products,
  });
});

module.exports = router;
