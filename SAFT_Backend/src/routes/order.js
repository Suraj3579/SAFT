const { requireSignin, userAccess } = require("../middleware");
const { addOrder, getOrders, getOrder } = require("../controller/order");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userAccess, addOrder);
router.get("/getOrders", requireSignin, userAccess, getOrders);
router.post("/getOrder", requireSignin, userAccess, getOrder);

module.exports = router;