const jwt = require("jsonwebtoken");
const usertable = require("../../../models/usertable.js");
const secretKey = "12345678910";
const bcrypt = require("bcryptjs");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await usertable.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "Invalid credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({ message: "Password not Match" });
      } else {
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: "100h" });
        res
          .status(200)
          .send({
            status: "successfull",
            message: "Login successful",
            token: token,
            user
          });
      }
    }
  } catch (errors) {
    res.status(500).send({ status: "failed", errors: errors.errors });
  }
};

module.exports = Login;
