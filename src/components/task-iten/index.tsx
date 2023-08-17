import { Task } from "../../types";
import styles from './task-iten.module.css';

type TaskItenProps = {
  name: string,
  id: string,
  completed: boolean,
  taskList: Task[],
  setTaskList: (arg: Task[]) => void,
}

function TaskIten({
  name,
  id,
  completed,
  taskList,
  setTaskList,
}: TaskItenProps) {
  const taskListCopy = [...taskList];
  const selectedTask = taskList.find((task) => task.id === id) || {
    id: '',
    completed: false,
    name: '',
  };
  const selectedTaskIndex = taskList.findIndex((task) => task.id === id);

  const handleCompleteTask = () => {
    taskListCopy[selectedTaskIndex] = {
      id,
      name,
      completed: !completed,
    }
    setTaskList([...taskListCopy]);
  };


  const handleMoveUp = () => {
    taskListCopy.splice(selectedTaskIndex, 1);
    taskListCopy.splice(selectedTaskIndex - 1, 0, selectedTask);

    setTaskList([...taskListCopy]);
  };

  const handleMoveDown = () => {
    taskListCopy.splice(selectedTaskIndex, 1);
    taskListCopy.splice(selectedTaskIndex + 1, 0, selectedTask);

    setTaskList([...taskListCopy]);
  };

  const handleDelete = () => {
    taskListCopy.splice(selectedTaskIndex, 1);
    setTaskList([...taskListCopy]);
  }

  const taskPosition = taskList.findIndex((task) => task.id === id);
  const styleButtonTest = taskListCopy[selectedTaskIndex].completed ? styles.completed : styles.notCompleted;

  return(
    <div>
      <button 
        onClick={ handleCompleteTask }
        className={ styleButtonTest }
      >
        X
      </button>
      <p>{ name }</p>
      <div>
        <button
          onClick={ handleMoveUp }
          disabled={ taskPosition === 0 }
        >
          <img src="./src/assets/images/up.png" alt="" />
        </button>
        <button
          onClick={ handleMoveDown }
          disabled={ taskPosition === taskList.length - 1 }
        >
          <img src="./src/assets/images/down.png" alt="" />
        </button>
      </div>
      <button
        onClick={ handleDelete }
      >Delete</button>
    </div>
  );
}

export default TaskIten;
