import movieData from "../model/movieData.model.js";

const updateMovies = async (req, res)=>{
    const { id } = req.params;
    try {
        const movie = await movieData.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!movie) {
          return res.status(404).send();
        }
        res.status(200).send(movie);
      
    } catch (error) {
        console.log(error.message);
        
    }

}
export default updateMovies;