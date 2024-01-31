import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowTask = () => {
  const [task, setTask] = useState([]);
  const [laoding, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/api/tasks/${id}`)
    .then((response)=>{
      setTask(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    })
  },[id])

  return (
    <div className="p-4">
      <BackButton destination='/' />
      <h1 className="text-3x1 my-4">Show Task Details</h1>
      {laoding ?(
        <Spinner />
      ):(
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span>{task._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{task.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Creat Time</span>
            <span>{new Date(task.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(task.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowTask