import React, { useState, useEffect } from 'react';

const TodoForm = ({ addOrUpdateTodo, editTodo, clearEditTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState('Low');  // Default value
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setCompleted(editTodo.completed);
      setPriority(editTodo.priority || 'Low');
      setDueDate(editTodo.dueDate ? editTodo.dueDate.split('T')[0] : ''); // Convert date to 'YYYY-MM-DD'
    } else {
      clearForm();
    }
  }, [editTodo]);

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setCompleted(false);
    setPriority('Low');
    setDueDate('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: editTodo?.id || null,
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate).toISOString() : null, // Convert to ISO format
      completed
    };
    addOrUpdateTodo(todo);
    clearForm();
    clearEditTodo();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Priority</label>
        <select
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label className="form-check-label">Completed</label>
      </div>
      <button type="submit" className="btn btn-primary">
        {editTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  );
};

export default TodoForm;
