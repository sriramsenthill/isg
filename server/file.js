const FormSubmit = require("./models/uploadData")

const fileUpload = async (req, res) => {
    try {
       var {name , date , file} =req.body
       let newform= await new FormSubmit({name,date,file})
       await newform.save()
       .then((data)=>{
          res.staus(200).json({"completed":"ok"})
          console.log(data)
       })
       .catch((err)=>{
        res.staus(404).json({"error":err.message})
       })
       

    } catch (error) {
    }
};

module.exports = { fileUpload };
