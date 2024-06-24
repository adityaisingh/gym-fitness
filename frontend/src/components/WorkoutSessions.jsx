import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Creating a top workout session involves a combination of exercises
          that target different muscle groups, promote cardiovascular fitness,
          and improve overall strength and flexibility.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1 BOOTCAMP>FEATURED</h1>
        <p>
          A featured bootcamp workout is an intense, high-energy session
          designed to improve overall fitness by combining elements of cardio,
          strength training, and conditioning.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Warm-Up (10 minutes)</h4>

            <li>Jumping Jacks: 2 minutes</li>
            <li>
              Dynamic Stretching: 5 minutes (arm circles, leg swings, torso
              twists)
            </li>
            <li>Light Jog or High Knees: 3 minutes</li>
          </div>
          <div>
            <h4>Workout Routine (45 minutes)</h4>
            <li> Cardio (10 minutes)</li>
            <li>Strength Training (20 minutes)</li>
            <li> Flexibility and Cool Down (10 minutes)</li>
          </div>
          <div>
            <h4>Detailed Exercise Descriptions</h4>
            <li>Burpees</li>
            <li>Mountain Climbers</li>
            <li>Push-Ups</li>
          </div>
          <div>
            <h4>Tips for a Successful Workout</h4>
            <li>Hydration</li>
            <li>Proper Form </li>
            <li>Progression </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
