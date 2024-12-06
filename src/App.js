import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoService from './services/TodoService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await TodoService.getTodos();
    setTodos(response);
  };

  const handleAddOrUpdateTodo = async (todo) => {
    if (todo.id) {
      await TodoService.updateTodo(todo.id, todo); // Update
    } else {
      await TodoService.createTodo(todo); // Create
    }
    setEditTodo(null);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await TodoService.deleteTodo(id);
    fetchTodos();
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo); // Load the todo into form for editing
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container mt-5">
        <TodoForm
          addOrUpdateTodo={handleAddOrUpdateTodo}
          editTodo={editTodo}
          clearEditTodo={() => setEditTodo(null)}
        />
        <TodoList
          todos={todos}
          onEditTodo={handleEditTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
