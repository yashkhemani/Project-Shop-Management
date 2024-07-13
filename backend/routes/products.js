const router = require("express").Router();
const Product = require("../model/Product");
const {
  createProductValidation,
  updateProductValidation,
} = require("../productValidation");
const verify = require("./verifyToken");

//for creating product
router.post("/", verify, async (req, res) => {
  //validate the request
  const { error } = createProductValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //creating a new product
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    shopId: req.body.shopId,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

//for updating the product
router.put("/:id", verify, async (req, res) => {
  const { error } = updateProductValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
