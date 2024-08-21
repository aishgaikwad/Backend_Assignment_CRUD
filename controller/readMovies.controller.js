import movieData from "../model/movieData.model.js";

const readMovies = async (req, res)=>{
    try {
        const movie = await movieData.find()
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        
    }

}
export default readMovies;

 
