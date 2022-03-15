import { Schema, model } from "mongoose";
import ProductCategory from "./productCategory.model";
import Supplier from "./supplier.model";

const productSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    quantity: Number,
    amount: Number,
    minimalExistence: Number,
    supplierId: {
        type: Supplier,
        ref: "Supplier"
    },
    productTypeId: {
        type: ProductCategory,
        ref: "ProductCategory"
    }
});

export default model("Product", productSchema);