const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.post("/api/shops", shopController.createShop);
router.put("/api/shops/:id", shopController.updateShop);
router.get("/api/shops", shopController.getShops);

module.exports = router;
