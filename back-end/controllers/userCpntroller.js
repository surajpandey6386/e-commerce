import userSchema from "../models/userModels.js";
export const Register = async(req, res) =>{
    console.log(req.body)
    const {name,email,phone,password,address} = req.body;
    const user = await userSchema.findOne({email});
    if(user){
        return res.status(400).json({message:"User already exists"});
    }
    const newUser = await userSchema.create({
        name,email,password,phone,address
    });

    return res.status(200).json({message:"register success", newUser});
}

export const Login = async(req,res) =>{
    console.log(req.body)
    const {email,password} = req.body;
    const user = await userSchema.findOne({email});
    if(!user){
        return res.status(400).json({message:"user not exists"});
    }
    if(user.password==password){
        const userId = user._id;
        return res.status(200).json({message:"login success", userId});
    }
    else{
        return res.status(400).json({message:"password incorrect"});
    }
}

async function handleLogin(req, res) {
  const { email, name, phone, address, image } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    // Create profile for new user
    user = new User({
      name,
      email,
      phone: phone || '',
      address: address || '',
      image: image || '',
    });
    await user.save();
  }

  // Proceed with session/token generation (e.g. JWT)
  res.status(200).json({ message: "Login successful",user});
}
export const getuserdetails = async(req,res)=> {
    const {id} = req.params;
    console.log(id);
    const user = await userSchema.findById(id);
    if(user){
        return res.status(200).json({ message: "user found",user});
    }
    res.status(400).json({ message: "user not found"});   
}


