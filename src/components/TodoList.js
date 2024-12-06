import React from 'react';

const TodoList = ({ todos, onEditTodo, onDeleteTodo }) => {
  return (
    <ul className="task-container">
      {todos.map((todo) => (
        <li key={todo.id} className="task-card">
          <div className='task-content'>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <span className="badge badge-pill badge-info">
              {todo.completed ? 'Completed' : 'Not Completed'}
            </span>
            <p className='task-priority priority-medium'>Priority: {todo.priority}</p>
            <p>Due Date: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'N/A'}</p>
          </div>
          <div className='task-actions'>
            <button onClick={() => onEditTodo(todo)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => onDeleteTodo(todo.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
