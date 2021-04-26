const express = require("express");
const { requireSignin, adminAccess } = require("../../middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controller/admin/order");
const router = express.Router();

router.post(`/order/update`, requireSignin, adminAccess, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  adminAccess,
  getCustomerOrders
);

module.exports = router;