import axios from "axios";

// const token = localStorage.getItem("token")
// remember it is a hard login
const URL = 'http://localhost:5000/api/v1/auth'
export const StudentLogin = (body) => axios.post(`${URL}/student/login`, body)

export const getTests = (body, token) => axios.post(`${URL}/tests/get`, body, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getQuestionsByTest = (body, token) => axios.post(`${URL}/questions/get`,body, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})