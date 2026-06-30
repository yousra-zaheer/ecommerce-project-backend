const express = require("express");
const router = express.Router();

const products = [
    {
        id: 1,
        name: "Iphone 14 Pro Max ",
        price: 99.50,
        brand: "Apple",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Apple Watch Series Space Grey",
        price: 50.50,
        brand: "Apple",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 150,
        brand: "Sony",
        category: "Electronics"
    },
    {
        id: 4,
        name: "Xiaomi Redmi 8 Original",
        price: 32.00,
        brand: "Xiaomi",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Soft Chairs ",
        price: 20.50,
        brand: "IKEA",
        category: "Sofa & chairs"
    },
    {
        id: 6,
        name: "Kitchen Mixer",
        price: 100,
        brand: "IKEA",
        category: "Kitchen appliances"
    },
    {
        id: 7,
        name: "Blenders",
        price: 39.99,
        brand: "IKEA",
        category: "Kitchen appliances"
    },
    {
        id: 8,
        name: "Coffee Maker",
        price: 60.10,
        brand: "IKEA",
        category: "Kitchen appliances"
    },
    {
        id: 9,
        name: "Electric Kettle",
        price: 100,
        brand: "IKEA",
        category: "Kitchen appliances"
    },
    {
        id: 10,
        name: "Camera",
        price: 240,
        brand: "Samsung",
        category: "Electronics"
    }
];

// Home
router.get("/", (req, res) => {
    res.send("Home Page");
});

// Get all products
router.get("/products", (req, res) => {
    res.json(products);
});

// Get product by ID
router.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

module.exports = router;