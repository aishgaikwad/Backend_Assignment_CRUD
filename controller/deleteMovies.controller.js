import movieData from "../model/movieData.model.js";

const deleteMovies = async (req, res)=>{
    const { id } = req.params;
    try {
        const movie = await movieData.findByIdAndDelete(id);
        if (!movie) {
          return res.status(404).send();
        }
        res.status(200).json({message:"Movie deleted successfully"});
    } catch (error) {
        console.log(error.message);
        
    }

}
export default deleteMovies;