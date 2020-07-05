import axios from 'axios';

const api2 = axios.create({
  baseURL: 'https://my-json-server.typicode.com/helenapaixao/the_movieApi',
});

export default api2;
