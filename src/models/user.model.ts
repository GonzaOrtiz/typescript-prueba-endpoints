import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    // auth: Boolean,
    // dateOfEntry: {
    //     type: Date,
    //     default: new Date()
    // },
    // lastUpdate: {
    //     type: Date,
    //     default: new Date()
    // }
})

export default model("User", userSchema);

// para revision
