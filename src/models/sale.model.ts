import { Schema, model } from "mongoose";
import PaymentCondition from "./paymentCondition.model";
import SaleDetail from "./saleDetail.model";

const saleSchema = new Schema({
    billNumer: {
        type: String,
        lowercase: true,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentConditionId: {
        type: PaymentCondition,
        ref: "PaymentCondition"
    },
    saleId: {
        type: SaleDetail,
        ref: "SaleDetail"
    },
    comment: String
});

export default model("Sale", saleSchema);