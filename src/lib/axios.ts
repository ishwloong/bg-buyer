import axios from "axios";

const axiosInstance = (baseUrl: "bgp" | "buyer" | string) => {
  const instance = axios.create({
    baseURL:
      baseUrl === "bgp"
        ? process.env.API_URL_BGP
        : baseUrl === "buyer"
        ? process.env.API_URL_BUYER
        : baseUrl,
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers["X-Host"] = process.env.X_HOST;
      config.headers["X-Store-Domain"] = process.env.X_HOST;
      return config;
    }
    // (error) => {
    //   console.log(error);
    //   return;
    // }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    }
    // (error) => {
    //   console.log(error);
    //   return;
    // }
  );

  return instance;
};

// Request interceptor
// axiosInstance().interceptors.request.use(
//   (config) => {
//     // Modify the request config here (e.g., add headers, authentication tokens)
//     const accessToken = JSON.parse(localStorage.getItem("token"));

//     // ** If token is present add it to request's Authorization Header
//     if (accessToken) {
//       if (config.headers) config.headers.token = accessToken;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request errors here

//     return Promise.reject(error);
//   }
// );

// Response interceptor
// axiosInstance.interceptors.response.use(
//     (response) => {
//       // Modify the response data here (e.g., parse, transform)

//       return response;
//     },
//     (error) => {
//       // Handle response errors here

//       return Promise.reject(error);
//     }
//   );

export default axiosInstance;
