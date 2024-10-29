import React from 'react';

const TodoList = ({ todos, onEditTodo, onDeleteTodo }) => {
  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h5>{todo.title}</h5>
            <p>{todo.description}</p>
            <span className="badge badge-pill badge-info">
              {todo.completed ? 'Completed' : 'Not Completed'}
            </span>
            <p>Priority: {todo.priority}</p>
            <p>Due Date: {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'N/A'}</p>
          </div>
          <div>
            <button onClick={() => onEditTodo(todo)} className="btn btn-warning btn-sm mr-2">
              Edit
            </button>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
