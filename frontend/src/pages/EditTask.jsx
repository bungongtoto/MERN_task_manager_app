import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false); 
  const [laoding, setLoading] = useState('');
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5000/api/tasks/${id}`)
    .then((response)=>{
      setTitle(response.data.title);
      setTask(response.data.task);
      setCompleted(response.data.completed);
      setLoading(false);
    })
    .catch((error)=>{
      setLoading(false);
      alert('An error happend. Please check console');
      
      console.log(error);
    })
  }, [id])

  const handleEditBook =()=>{
    const data = {
      title, 
      task, 
      completed, 
    };
    setLoading(true);
    axios.put(`http://localhost:5000/api/tasks/${id}`, data)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Task Edited Successfully', {variant: 'success'});
      navigate('/');
    })
    .catch((error) => {
      setLoading(false);
      // alert('An error happend. Please check console');
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(error);
    });
  }
  return (
    <div className="p-4">
      <BackButton destination="/" />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {laoding ? <Spinner />: ''}
      <div className="flex flex-col border-sky-400 rounded-xl p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)} 
            className="border-2 border-gray-500 px-4 py-2 w-full" 
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Task</label>
          <textarea
            cols="30"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border-2 border-gray-500 px-4 py-4 w-full"
          />
        </div>
        <div>
          <select
            value={completed}
            name="status"
            id="status"
            onChange={(e) => setCompleted(e.target.value)}
            className="bg-sky-100 p-2"
          >
            <option  className="bg-orange-200" value={false}>Active</option>
            <option className="bg-green-200" value={true}>Completed</option>
          </select>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default EditTask