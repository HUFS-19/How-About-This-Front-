import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const userApi = {
  login: '',
  logout: '',

  join: (id, pw) => {
    API.post('userAPI/join', {
      id: id,
      password: pw,
    });
  },
  idCheck: (id) => API.post('userAPI/join/idCheck', { id: id }),

  checkLogin: () => {
    return API.get('userAPI/checkLogin');
  },
};
