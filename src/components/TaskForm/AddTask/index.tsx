import { useState } from "react";
import { Section } from "./styles";

interface Props {
  onSubmitTask: (taskDescription : string) => void;
}

export function AddTask({ onSubmitTask }: Props) {
  const [taskInput, setTaskInput] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (taskInput !== "" && e.code === "Enter") {
      onSubmitTask(taskInput);
      setTaskInput("");
    }
  };
  const hanleAddButton = () => {
    if (taskInput !== "") {
      onSubmitTask(taskInput);
      setTaskInput("");
    }
  };
  return (
    <Section>
      <input
        type="text"
        placeholder="Adcionar uma tarefa: "
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={hanleAddButton}>
        <i className="fa-thin fa-plus fa-xl"></i>
      </button>
    </Section>
  );
}
