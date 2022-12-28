require("dotenv").config();

const express = require("express");
const WorkoutRoutes = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(res.path, res.method);
  next();
});

// routes
app.use("/api/workouts", WorkoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

// http://localhost:4000
