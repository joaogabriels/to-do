import { useState } from "react";
import { Section } from "./styles";

interface Tasks {
  task: {
    id: number;
    description: string;
    checked: boolean;
  };

  onDeleteTask: (id: number) => void;
}

export function TaskList({ task, onDeleteTask }: Tasks) {
  const [isDone, setIsDone] = useState(task.checked);

  function handleDeleteButton(id: number) {
    onDeleteTask(task.id);
  }

  return (
    <Section checked={isDone}>
      <section>
        <div className="task-list">
          <input
            type="checkbox"
            checked={isDone}
            onChange={(e) => setIsDone(e.target.checked)}
          />
          <label>{task.description}</label>
        </div>
        <button type="button" onClick={() => handleDeleteButton(task.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </section>
    </Section>
  );
}
