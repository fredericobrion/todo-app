import { useState } from 'react'
import './App.css'
import Header from './components/header'
import { Task } from './types';
import TaskIten from './components/task-iten';
import NewTask from './components/new-task';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskStatus, setTaskStatus] = useState<'all' | 'active' | 'completed'>('all');

  let taskToShow = taskList;

  switch(taskStatus) {
    case 'active':
      taskToShow = taskList.filter((task) => task.completed === false);
      break;
    case 'completed':
      taskToShow = taskList.filter((task) => task.completed === true);
      break;
    default:
      taskToShow = taskList;
  }

  const handleClearCompleted = () => {
    const notCompletedTasks = taskList.filter((task) => task.completed === false);
    setTaskList([...notCompletedTasks]);
  };

  return (
    <div className={ darkMode
      ? 'container dark-mode' : 'container light-mode' }>
      <Header 
        darkMode={ darkMode }
        setDarkMode={ setDarkMode }
      />
      <NewTask
        darkMode={ darkMode }
        taskList={ taskList }
        setTaskList={ setTaskList }
      />
      <section>
        {taskToShow.map((task) => {
          return(
            <div key={ task.id }>
              <TaskIten
                name={ task.name }
                completed={ task.completed }
                id={ task.id }
                taskList={ taskList }
                setTaskList={ setTaskList }
              />
            </div>
          )
        })}
        <div>
          <p>Item left</p>
          <button onClick={ () => setTaskStatus('all') }>All</button>
          <button onClick={ () => setTaskStatus('active') }>Active</button>
          <button onClick={ () => setTaskStatus('completed') }>Completed</button>
          <button onClick={ handleClearCompleted }>Clear Completed</button>
        </div>
      </section>
    </div>
  )
}

export default App
