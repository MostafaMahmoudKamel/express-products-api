const express = require("express");
const app = express();

const productRouter=require('./routes/productRoutes')

app.use(express.json());

app.use("/api/v1/products", productRouter);

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`listing done to prot ${port}`);
});
