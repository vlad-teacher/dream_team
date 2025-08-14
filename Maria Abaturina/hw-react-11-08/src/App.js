import { PushCounter } from "./WorkoutCounter/PushCounter";
import { Exercisespresscounter } from "./WorkoutCounter/ExercisespressCounter";
import { Runningcounter } from "./WorkoutCounter/RunningCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>СпортЫвная зЯрАдка</h1>
      <PushCounter />
      <Exercisespresscounter />
      <Runningcounter />
    </div>
  );
}

export default App;
