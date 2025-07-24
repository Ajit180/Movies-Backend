import { Movies } from "../model/movieschema.js";

export const createmovies = async (data) => {
  try {
    const name = data.name;
    const releaseyear = data.releaseyear;
    const rating = data.rating;
    const genre = data.genre;

    const createdata = Movies.create({ name, releaseyear, rating, genre });

    return createdata;
  } catch (error) {
    console.log("Error while creating an movies data", error);
    throw error;
  }
};

export const getAllMovies = async () => {
  try {
    const movies = await Movies.find();
    return movies;
  } catch (error) {
    console.log("Error while fetching all movies:", error);
    throw error;
  }
};

export const updateMovie = async (id, data) => {
  try {
    const updatedMovie = await Movies.findByIdAndUpdate(id, data, { new: true });
    return updatedMovie;
  } catch (error) {
    console.log("Error while updating movie:", error);
    throw error;
  }
};


export const deleteMovie = async (id) => {
  try {
    
    const deleted = await Movies.findByIdAndDelete(id);
    return deleted;
  } catch (error) {
    console.log("Error while deleting movie:", error);
    throw error;
  }
};
