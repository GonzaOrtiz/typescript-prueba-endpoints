import { Schema, model } from "mongoose";
import Purchase from "./purchase.model";
import ProductInventory from "./product.model";

const purchaseDetailSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productInventoryId: {
        type: ProductInventory,
        ref: "ProductInventory"
    },
    purchaseId: {
        type: Purchase,
        ref: "Purchase"
    }
});

export default model("PurchaseDetail", purchaseDetailSchema);