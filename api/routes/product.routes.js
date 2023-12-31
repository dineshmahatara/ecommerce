const auth = require("../app/middleware/auth.middleware");
const { isAdmin } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");

const ProductController = require("../app/controller/product.controller");
const product_ctrl = new ProductController();

const router = require("express").Router();
router.get("/byslug/:slug", product_ctrl.getProductBySlug);

router.route("/")
    .get(product_ctrl.getProducts)
    .post(auth, isAdmin, uploader.array('images'), product_ctrl.productStore)

router.route("/:id")
    .get(product_ctrl.getProductById)
    .delete(auth, isAdmin, product_ctrl.deleteById)
    .put(auth, isAdmin,uploader.array("images"), product_ctrl.productUpdate)
module.exports = router;