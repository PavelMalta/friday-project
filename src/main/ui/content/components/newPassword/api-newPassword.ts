import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0'
})


export const newPasswordAPI = {
    resetPassword(password: string, resetPasswordToken: string | undefined)  {
        return instance.post('auth/set-new-password', {password, resetPasswordToken})
    }
}