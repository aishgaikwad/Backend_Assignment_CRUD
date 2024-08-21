import mongoose, { model } from "mongoose";

export const movieScheme = new mongoose.Schema({
    name: String,
    img: String,
    summary: String
})
 const movieData=  mongoose.model( 'movieData', movieScheme)
  export default movieData;