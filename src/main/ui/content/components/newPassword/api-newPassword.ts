import { instance } from "../login/api-login";


export const newPasswordAPI = {
    resetPassword(password: string, resetPasswordToken: string | undefined)  {
        return instance.post('auth/set-new-password', {password, resetPasswordToken})
    }
}