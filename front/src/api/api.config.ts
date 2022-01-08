import axios from 'axios';
import { configs } from 'src/config';

const { API_URL, VERSION } = configs;

const headerConfig = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Version': `v${VERSION}`,
  },
};

const API = axios.create(headerConfig);

export { API, API_URL, VERSION };
