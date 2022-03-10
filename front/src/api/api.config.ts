import axios from 'axios';
import { configs } from 'src/config';

const { API_URL, VERSION } = configs;

axios.defaults.withCredentials = true;

const headerConfig = {
  // baseURL: API_URL,
  baseURL: 'https://api.sungkyu.info',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Version': `v${VERSION}`,
  },
};

const API = axios.create(headerConfig);

export { API, API_URL, VERSION };
