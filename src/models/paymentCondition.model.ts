import { Schema, model } from "mongoose";

const paymentConditionSchema = new Schema({
    name: {
        type: String,
        maxlength: 50,
        required: true
    }
});

export default model("paymentConditionSchema", paymentConditionSchema);