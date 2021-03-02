import axios from 'axios';

const api = axios.create({
  baseURL: `https://helix-happy-technosaurus.glitch.me/api` 
});

export default api;