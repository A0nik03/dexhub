import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWVlYmViMWUyMGI3YmNjNWZmZjk2ZWYwNDkzNmM0MCIsIm5iZiI6MTczMDcyNzA1OC4wMDg2MTQzLCJzdWIiOiI2NzI4Y2I0MmE3MDJmY2EyMmYwYmM4MGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-yGqGZ8qcaV4X1IqqMaWUAQ11MGCF_chzJM6wgRMZ_k",
  },
});

export default instance;
