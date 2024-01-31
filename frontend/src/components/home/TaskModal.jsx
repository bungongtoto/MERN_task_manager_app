import { FcTodoList } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { MdTitle } from "react-icons/md";
import PropTypes from "prop-types";

const TaskModal = ({ task,onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-[600px] max-w-full max-h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg text-white">
          {task.completed ? "Complted" : "Active"}
        </h2>
        
        <div className="flex justify-start items-center gap-x-2 mt-4">
          <MdTitle className="text-red-300 text-2xl" />
          <h2 className="my-1 font-bold text-1xl">{task.title}</h2>
        </div>
        <div className="flex justify-start  gap-x-5">
          <FcTodoList className="text-red-300 text-2xl" />
          <textarea name="" id="" cols="30" rows="5" value={task.task}></textarea>
        </div>
      </div>
    </div>
  );
};

TaskModal.propTypes = {
  task: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TaskModal;
