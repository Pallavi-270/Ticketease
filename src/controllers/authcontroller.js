const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.register = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ msg: "user register successfully" })
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
};
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(404).json({ msg: "usernot found" })
        const isMatch = await bcrypy.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ msg: "invalid credentials" })
        const token = jwt.sign({ id: User.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({ token })
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};