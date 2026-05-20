import { useEffect, useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    fetch("https://student-task-tracker-6mpj.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });

  }, []);

  return (
    <div className="container">

      <h1>Student Task Tracker</h1>

      <div className="card">

        <h2>Tasks</h2>

        {
          tasks.map((task) => (
            <div className="task" key={task.id}>
              {task.title}
            </div>
          ))
        }

      </div>

    </div>
  );
}

export default App;