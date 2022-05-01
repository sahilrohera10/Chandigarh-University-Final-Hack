// import controllers review, products
const productController = require("../app/Controllers/productController");
const reviewController = require("../app/Controllers/reviewController");
const app = require("../app/Controllers/main");

// router
const router = require("express").Router();
router.post("/registration", app.datasend);
router.post("/sendmail", app.sendMAil);
// router.post("/addproduct", app.addProduct);
router.post("/forum", app.Forum);
router.get("/getforum", app.Getforum);
router.post("/addmenu", app.addmenu);
router.get("/getmenu/:id", app.getmenu);
router.delete("/deletemenu", app.deletemenu);
router.patch("/updatemenu", app.updatemenu);
router.post("/orderfood", function (req, res) {
  app.OrderFood;
});
router.get("/showorders", app.ShowOrders);
router.post("/addshop", app.addshop);
router.get("/getshop", app.getshop);
// use routers
router.post(
  "/addProduct",
  productController.upload,
  productController.addProduct
);

router.get("/allProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProduct);

// Review Url and Controller

router.get("/allReviews", reviewController.getAllReviews);
router.post("/addReview/:id", reviewController.addReview);

// get product Reviews
router.get("/getProductReviews/:id", productController.getProductReviews);

// Products router
router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
