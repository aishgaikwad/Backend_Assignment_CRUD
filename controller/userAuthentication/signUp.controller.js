import User from "../../model/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const signUpForm = async (req, res)=>{
    const {first_name,last_name,email,mobile,password} = req.body;
    try {

  //check if user exists
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
  }

 // Hash the password
 const hashedPassword = await bcrypt.hash(password, 10);


        const userData = await User.create({
          name: first_name,
          last_name: last_name,
          email: email,
          mobile: mobile,
          password: hashedPassword,
        });
        const token = jwt.sign(
            { id: userData._id, email: userData.email },
            'your_secret_key', 
            { expiresIn: '1h' } 
        );

        res.status(200).json({ user: userData, token });
    } catch (error) {
        console.log(error.message);
        
    }

}
export default signUpForm;