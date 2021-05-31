import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})


export const passwordRecoverAPI = {
    forgot(email: string, from: string, message: any) {
        return instance.post('auth/forgot', {email, from, message})
    }
}