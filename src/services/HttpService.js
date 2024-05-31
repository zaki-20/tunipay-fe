import axios from 'axios';

class HttpService {
  constructor(config = {}) {
    this.baseURL = config.baseURL || process.env.REACT_APP_API_BASE_URL || '';
    this.headers = config.headers || {};
    this.timeout = config.timeout || 5000; // Default timeout of 5 seconds
    this.http = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: this.headers,
    });
  }

  async request(endpoint, options = {}) {
    try {
      const response = await this.http.request({
        url: endpoint,
        ...options,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    if (error) {
      return new Error(`${error.response.data.error || 'Unknown error'}`);
    } else if (error.request) {
      // Request made but no response received
      return new Error('No response received from server');
    } else {
      // Something happened in setting up the request
      return new Error(`Request setup error! ${error.message}`);
    }
  }

  async makeRequest(method, endpoint, data = null, headers = {}) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...headers,
      },
      data,
    };
    return this.request(endpoint, options);
  }

  get(endpoint, headers = {}) {
    return this.makeRequest('GET', endpoint, null, headers);
  }

  async post(endpoint, data, headers = {}) {
    return this.makeRequest('POST', endpoint, data, headers);
  }

  async put(endpoint, data, headers = {}) {
    return this.makeRequest('PUT', endpoint, data, headers);
  }

  // Add methods for other HTTP verbs as needed
}

export default HttpService;
