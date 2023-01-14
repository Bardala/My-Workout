require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(res.path, res.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// connect db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to database & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

// http://localhost:4000
