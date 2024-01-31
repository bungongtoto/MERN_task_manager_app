import PropTypes from "prop-types";
import TaskSingleCard from "./TaskSingleCard";

const TasksCard = ({ tasks }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tasks.map((item) => (
        <TaskSingleCard key={item._id} task={item} />
      ))}
    </div>
  );
};

TasksCard.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TasksCard;
