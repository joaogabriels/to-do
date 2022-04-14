import { useState } from "react";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

interface Tasks {
  id: number;
  description: string;
  checked: boolean;
}

export function TaskForm() {
  const [taskList, setTaskList] = useState<Tasks[]>([]);

  const handleAddTask = (taskDescription: string) => {
    let updatedTaskList = [...taskList];
    updatedTaskList.push({
      id: taskList.length + 1,
      description: taskDescription,
      checked: false,
    });
    setTaskList(updatedTaskList);
  };

  const handleDeleteTask = (id: number) => {
    let updatedTaskList = [...taskList];
    setTaskList(updatedTaskList.filter((item) => item.id !== id));
  };
  
  
  return (
    <>
      <AddTask onSubmitTask={handleAddTask} />
      {taskList.map((task, index) => (
        <TaskList onDeleteTask={handleDeleteTask} key={index} task={task} />
      ))}
    </>
  );
}
