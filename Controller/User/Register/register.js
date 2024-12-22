const usertable = require("../../../models/usertable.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secretKey = '12345678910';   

const Register = async (req,res) =>{
      console.log("api check",req.body);

   try {
      const { fullname, email, mobile, password } = req.body;
      console.log("api check",req.body);
      const salt = await bcrypt.genSalt(10);
      const bcrypt_password = await bcrypt.hash(password, salt);

      const createuser = new usertable({
         fullname,
         email,
         mobile,
         password:bcrypt_password,
       });

       const response = await createuser.save();

       const token = jwt.sign({ id: response.id }, secretKey, { expiresIn: '1h' });

       res.send({ status: "sucessful", data: response,token:token });

   } catch (error) {
      res.send({ status: "faild", errors: error });
      console.log("error check",error);
   }
}

module.exports = Register