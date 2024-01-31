import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { MdOutlineAddBox } from "react-icons/md";
import TasksCard from "../components/home/TasksCard.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [laoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Tasks List</h1>
        <Link to="/tasks/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {laoding ? (
        <Spinner />
      ) : (
        <TasksCard tasks={tasks} />
      )}
    </div>
  );
};

export default Home;
