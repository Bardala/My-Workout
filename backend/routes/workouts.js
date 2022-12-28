const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

module.exports = router;
