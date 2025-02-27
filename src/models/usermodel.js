const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, Unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    role: { type: String, enum: ["admin", "customer"], default: "customer" },
});
// hashed password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
     next();
})
module.exports = mongoose.model("User", userSchema)