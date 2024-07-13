const Shop = require("../model/shop");

// Create a new shop
exports.createShop = async (req, res) => {
  const { name, address } = req.body;

  if (!name || !address) {
    return res
      .status(400)
      .json({ msg: "Please include both name and address" });
  }

  try {
    const newShop = new Shop({ name, address });
    const savedShop = await newShop.save();
    res.json(savedShop);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Update a shop
exports.updateShop = async (req, res) => {
  const { name, address } = req.body;
  try {
    let shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ msg: "Shop not found" });

    shop.name = name;
    shop.address = address;
    const updatedShop = await shop.save();
    res.json(updatedShop);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
};

// Get all shops
exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
};
