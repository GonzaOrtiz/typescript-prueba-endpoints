import { Schema, model } from "mongoose";
import Product from "./product.model";

const saleDetailSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productId: {
        type: Product,
        ref: "Product"
    },
});

export default model("SaleDetail", saleDetailSchema);