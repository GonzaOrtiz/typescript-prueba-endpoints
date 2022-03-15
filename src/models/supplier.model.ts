import { Schema, model } from "mongoose";

const supplierSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        maxlength: 50,
        required: true
    },
    telephone: String,
    detail: String
});

export default model("Supplier", supplierSchema);