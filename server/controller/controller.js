import { packageOrder } from "../config/packagingLogic.js";

export const placeOrder = async (req, res) => {
  try {
    const selectedProducts = req.body.items; // get the selected products from the request body
    if (!selectedProducts || selectedProducts.length === 0) {
      return res.status(400).json({ message: "No products selected" });
    }
    console.log(selectedProducts); // log the selected products for debugging

    const packagedOrders = packageOrder(selectedProducts); // packaing the received order

    res.status(200).json(packagedOrders);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
