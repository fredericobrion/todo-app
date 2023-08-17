import { useState } from 'react';
import { Task } from '../../types';
import { nanoid } from 'nanoid';
import styles from './new-task.module.css';

type NewTaskProps = {
  darkMode: boolean,
  taskList: Task[],
  setTaskList: (arg: Task[]) => void,
}

function NewTask({ darkMode, taskList, setTaskList }: NewTaskProps) {
  const [newTask, setNewTask] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTaskList([...taskList, {
        name: newTask,
        completed,
        id: nanoid(),
      }])
      setNewTask('');
  }

  const setClassInput = () => {
    if (darkMode) {
      return completed
        ? `${styles.darkMode} ${styles.completedDark}`
        : `${styles.darkMode} ${styles.notCompletedDark}`
    }
    return completed
      ? `${styles.lightMode} ${styles.completedLight}`
      : `${styles.lightMode} ${styles.notCompletedLight}`
  };

  return (
    <div className={ styles.container }>
      <button
        onClick={ () => setCompleted(!completed) }
        className={ darkMode ? styles.completedButtonDark : styles.completedButtonLight }
      >
        <span>&#10003;</span>
      </button>
      <form className={ styles.form } onSubmit={ handleAddTask }>
        <input
          className={ setClassInput() }
          type="text"
          value={ newTask }
          onChange={ (e) => setNewTask(e.target.value) }
        />
      </form>
    </div>
  );
}

export default NewTask;
