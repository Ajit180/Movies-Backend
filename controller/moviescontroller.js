import { createmovies, deleteMovie, getAllMovies, updateMovie } from "../services/movieServices.js";

export const createmoviescontroller = async(req,res)=>{
    try {


        const response = await createmovies({
            name:req.body.name,
            releaseyear:req.body.releaseyear,
            rating:req.body.rating,
            genre:req.body.genre
        })

        return res.status(201).json({
            success:true,
            message:"Movies data is created successfully",
            data:response
        })
        
    } catch (error) {
        console.log("Error while creating an movies in the controller",error);
    }
}


export const getAllMoviesController = async (req, res) => {
  try {
    const movies = await getAllMovies();
    return res.status(200).json({
      success: true,
      message: 'Fetched all movies successfully',
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch movies',
    });
  }
};



export const updateMovieController = async (req, res) => {
  try {
    const updated = await updateMovie(req.params.id, req.body);

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      data: updated,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating movie",
    });
  }
};



export const deleteMovieController = async (req, res) => {
  try {
    const deleted = await deleteMovie(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting movie",
    });
  }
};