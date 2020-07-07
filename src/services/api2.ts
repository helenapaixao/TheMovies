import axios from 'axios';

const api2 = axios.create({
  baseURL: 'https://my-json-server.typicode.com/helenapaixao/the_movieApi',
});

export async function getProfile( id: string) {
    const response = await api2.get(`/profile/${id}`);
    return response.data;
}


export default api2;
