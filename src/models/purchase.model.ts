import { Schema, model } from "mongoose";
import Supplier from "./supplier.model";

const purchaseSchema = new Schema({
    billNumer: {
        type: String,
        lowercase: true,
        maxlength: 50,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    supplierId: {
        type: Supplier,
        ref: "Supplier"
    }
});

export default model("Purchase", purchaseSchema);