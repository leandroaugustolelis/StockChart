import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox.iexapis.com',
  params: {
    token: 'Tpk_c9f980a6f2ec441daf0dfa030572bebd',
  },
});

export default api;
