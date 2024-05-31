import HttpService from './HttpService';

class ApiService extends HttpService {
  constructor(baseURL, config = {}) {
    super({ baseURL, ...config });
  }

  async register(userData) {
    return  this.post('/register', userData);
  }
  async login(userData) {
    return this.post('/login', userData);
  }
  async forgotPassword(userData) {
    return this.post('/password/forgot', userData);
  }
  async resetPassword(userData, token) {
    return this.put(`/password/reset/${token}`, userData);
  }
}

export default ApiService;
