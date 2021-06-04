import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0'
})

const from = 'shamashov87@mail.ru';
const message = `<div>password recover link: <a href='https://pavelmalta.github.io/friday-project/#/newPassword/$token$'>Link</a></div>`

export const passwordRecoverAPI = {
    recover(email: string) {
        return instance.post('auth/forgot', {email, from, message})
    }
}