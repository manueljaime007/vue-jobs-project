export const apiConfig = {
  baseURL: 'http://localhost:8004', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json', 
  },
  endpoints: {
    jobs: '/jobs', 
    jobDetails: (id: number) => `/jobs/${id}`, 
  }
};