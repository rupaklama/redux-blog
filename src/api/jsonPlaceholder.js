import axios from 'axios';

// instance of axios
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});