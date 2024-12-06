import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/todos';
// const API_BASE_URL = 'ec2-3-94-140-74.compute-1.amazonaws.com/api/todos';

class TodoService {
  async getTodos() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching Todos:', error);
      throw error;
    }
  }

  async createTodo(todo) {
    try {
      const response = await axios.post(API_BASE_URL, todo);
      return response.data;
    } catch (error) {
      console.error('Error creating Todo:', error);
      throw error;
    }
  }

  async updateTodo(id, todo) {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, todo);
      return response.data;
    } catch (error) {
      console.error('Error updating Todo:', error);
      throw error;
    }
  }

  async deleteTodo(id) {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting Todo:', error);
      throw error;
    }
  }
}

//eslint-disable-next-line
export default new TodoService();
