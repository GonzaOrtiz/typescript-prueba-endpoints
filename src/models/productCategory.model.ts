import { Schema, model } from "mongoose";

const productCategorySchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export default model("ProductCategory", productCategorySchema);