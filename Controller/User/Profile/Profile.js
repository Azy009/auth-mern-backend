const usertable = require("../../../models/usertable.js");

const Profile = async (req, res) => {
    const userId = req.user.id;
    console.log("123456",userId)
    try {
      const userdetail = await usertable.findById(userId);
      if (!userdetail) {
        return res.status(404).send({ error: 'user detail not found' });
      }
  
      res.status(200).send({status:"successfully",data:userdetail});
    } catch (err) {
      res.status(500).send({ error: 'An error occurred while fetching userdetail ',servererror:err });
    }
};

module.exports = Profile;
