// //const fetch = require("node-fetch");
// class HttpApiClient {
//   constructor(axiosInstance, options = {}) {
//     this._axios = axiosInstance;
//     this._baseURL = options.baseURL || "";
//     this._headers = options.headers || {};
//     this.data = options.data || {};
//   }

//   async _fetchJSON(endpoint, options = {}) {
//     let conf = {
//       url: this._baseURL + endpoint,
//       data: options.data,
//       headers: this._headers,
//       method: options.method,
//     };
//     console.log("conf", conf);
//     return this._axios(conf)
//       .then(function (response) {
//         console.log("res:", response.data);
//         return {
//           data: response.data,
//           status: response.status,
//           success: true,
//         };
//       })
//       .catch(function (error) {
//         console.log(error);
//         return {
//           data: error.response.data,
//           status: error.response.status,
//           success: false,
//         };
//       });
//   }

//   setHeader(key, value) {
//     this._headers[key] = value;
//     return this;
//   }

//   getHeader(key) {
//     return this._headers[key];
//   }

//   setBasicAuth(username, password) {
//     this._headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
//     return this;
//   }

//   setBearerAuth(token) {
//     this._headers.Authorization = `Bearer ${token}`;
//     return this;
//   }

//   get(endpoint, options = {}) {
//     return this._fetchJSON(endpoint, {
//       ...options,
//       data: "",
//       method: "get",
//     });
//   }

//   post(endpoint, body, options = {}) {
//     return this._fetchJSON(endpoint, {
//       ...options,
//       data: body ? JSON.stringify(body) : undefined,
//       method: "post",
//     });
//   }

//   put(endpoint, body, options = {}) {
//     return this._fetchJSON(endpoint, {
//       ...options,
//       data: body ? JSON.stringify(body) : undefined,
//       method: "PUT",
//     });
//   }

//   patch(endpoint, body, options = {}) {
//     return this._fetchJSON(endpoint, {
//       parseResponse: false,
//       ...options,
//       data: body ? JSON.stringify(body) : undefined,
//       method: "PATCH",
//     });
//   }

//   delete(endpoint, options = {}) {
//     return this._fetchJSON(endpoint, {
//       parseResponse: false,
//       ...options,
//       method: "DELETE",
//     });
//   }
// }

// module.exports = HttpApiClient;
