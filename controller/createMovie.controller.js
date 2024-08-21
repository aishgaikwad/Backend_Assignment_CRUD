// import User from "../model/user.model.js";
import movieData from "../model/movieData.model.js";
const createMovies = async (req, res)=>{
    const {name,img,summary} = req.body;
    try {
        const movie = await movieData.create({
            name: name,
            img: img,
            summary:summary
        })
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        
    }

}
export default createMovies;