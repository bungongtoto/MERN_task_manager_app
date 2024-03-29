import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const DeleteTask = () => {
  const [laoding, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully', {variant: 'success'});
      navigate('/');
    })
    .catch((error)=> {
      setLoading(false);
      enqueueSnackbar('Error', {variant: 'error'});
      console.log(error);
    })
  }
  return (
    <div className="p-4">
      <BackButton destination="/" />
      <h1 className="text-3xl my-4">Delete Task</h1>

      {laoding ? <Spinner />: ''}

      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3>Are You Sure You want to delete this Task?</h3>

        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteTask