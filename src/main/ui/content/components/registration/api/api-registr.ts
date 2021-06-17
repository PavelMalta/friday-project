import {instance} from "../../login/api-login";

export const regAPI = {

    registration(email: string, password: string) {
        return instance.post('auth/register', {email, password})

    }
}