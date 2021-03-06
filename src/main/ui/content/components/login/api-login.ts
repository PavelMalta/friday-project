import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://back-from-friday-project.herokuapp.com/2.0/'
})


export const authAPI = {

    getAuth() {
        return instance.post(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})

    },
    logout() {
        return instance.delete('auth/me')
    },
    updateProfile(name: string, avatar: string) {
        return instance.put('auth/me', {name, avatar})

    }
}

