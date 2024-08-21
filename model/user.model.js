import mongoose, { model } from "mongoose";

export const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    mobile: String,
    password:String
})
 const User=  mongoose.model( 'User', userSchema)
  export default User;
