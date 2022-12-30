import { useEffect, useState } from "react";

import WorkoutsDetails from "../components/WorkoutsDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutsDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <div className="workout-form">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
