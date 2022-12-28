// This file defines the schema for the workout collection in the database

const mongoose = require("mongoose");

const Schema = mongoose.Schema; // this is a mongoose object that will help us define the schema

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
); // this is a mongoose option that will automatically add a createdAt and updatedAt field to the schema

module.exports = mongoose.model("Workout", workoutSchema); // this will create a collection called 'Workouts' in the database
