import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  releaseyear: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    default: 'Unknown',
  },
}, { timestamps: true });

export const Movies = mongoose.model("Movie", movieSchema);
