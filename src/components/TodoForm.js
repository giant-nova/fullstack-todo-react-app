import React, { useState, useEffect } from "react";

const TodoForm = ({ addOrUpdateTodo, editTodo, clearEditTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState("Low"); // Default value
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setCompleted(editTodo.completed);
      setPriority(editTodo.priority || "Low");
      setDueDate(editTodo.dueDate ? editTodo.dueDate.split("T")[0] : ""); // Convert date to 'YYYY-MM-DD'
    } else {
      clearForm();
    }
  }, [editTodo]);

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setCompleted(false);
    setPriority("Low");
    setDueDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: editTodo?.id || null,
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null, // Convert to ISO format
      completed,
    };
    addOrUpdateTodo(todo);
    clearForm();
    clearEditTodo();
  };

  return (
    <form onSubmit={handleSubmit} class="todo-form">
        <h2>Add New Todo</h2>
        <input type="text" id="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <select id="priority"  value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <input type="date" id="due-date"  value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <div className="check">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="checkbox"
          />
          <label className="form-check-label">Completed</label>
      </div>
        <button type="submit" id="add-todo">{editTodo ? "Update Todo" : "Add Todo"}</button>
        
    </form>
  );
};

export default TodoForm;
