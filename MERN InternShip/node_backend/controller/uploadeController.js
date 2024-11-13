const mySqlPool = require("../db");


const uploadImage = async (req,res)=>{
    try {
        const file = req.file;
        console.log(file);
        res.status(200).send({message:"success",file});
    } catch (error) {
        console.log(error);
    }
}





module.exports = { uploadImage};
