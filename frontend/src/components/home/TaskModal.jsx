import { FcTodoList } from "react-icons/fc";
import { MdTitle } from "react-icons/md";
import PropTypes from "prop-types";

const TaskModal = ({ task,onClose }) => {
  const completed = task.completed;
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
        <h2 className={ completed ? "absolute top-1 right-2 px-4 py-1 rounded-lg text-white bg-green-400" : "absolute top-1 right-2 px-4 py-1 rounded-lg text-white bg-red-300"}>
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
