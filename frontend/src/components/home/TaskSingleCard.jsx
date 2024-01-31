import { Link } from "react-router-dom";
import { MdTitle } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { FcTodoList } from "react-icons/fc";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskSingleCard = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  const completed = task.completed
  return (
    <div
      key={task._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className={ completed ? "absolute top-1 right-2 px-4 py-1 rounded-lg text-white bg-green-400" : "absolute top-1 right-2 px-4 py-1 rounded-lg text-white bg-red-300"}>
        {task.completed ? "Completed" : "Active"}
      </h2>
      
      <div className="flex justify-start items-center gap-x-2 mt-8 ">
        <MdTitle className="text-red-300 text-2xl" />
        <h2 className="my-1 font-bold text-1xl">{task.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <FcTodoList className="text-red-300 text-2xl" />
        <div className="max-w-20">
          <h2 className="my-1 line-clamp-1 overflow-hidden">{task.task}</h2>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/tasks/details/${task._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/tasks/edit/${task._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/tasks/delete/${task._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <TaskModal task={task} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

TaskSingleCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskSingleCard;
