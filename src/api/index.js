import axios from "axios";

// const token = localStorage.getItem("token")
// remember it is a hard login
const URL = 'http://localhost:5000/api/v1/auth'
export const StudentLogin = (body) => axios.post(`${URL}/student/login`, body)