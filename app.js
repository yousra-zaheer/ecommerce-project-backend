const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.use("/", productRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
    console.log("Access the API at http://localhost:5000");
});