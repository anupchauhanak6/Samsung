import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    FullName: {type: String},
    Email: {type: String, unique: true, require: true},
    Password: {type: String, require: true},
    Image: {type: String}
}, {timestamps: true})

export const user = mongoose.model("User", userSchema)