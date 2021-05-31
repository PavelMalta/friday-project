import React, {useState} from "react";
// import style from './Registration.module.css';
// import {useFormik} from "formik";

//
// type FormikErrorType = {
//     email?: string
//     password?: string
//     confirmPassword?: string
// }
//
// export const Registration = () => {
//
//
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             confirmPassword: ''
//         },
//         validate: (values) => {
//             const errors: FormikErrorType = {};
//             if (!values.email) {
//                 errors.email = 'email is required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email address';
//             }
//
//             if (!values.password) {
//                 errors.password = 'password Required';
//             } else if (values.password.length < 3) {
//                 errors.password = 'Must be more then 2 chars';
//             }
//
//             if (!values.confirmPassword) {
//                 errors.confirmPassword = 'confirm password Required';
//             } else if(values.password !== values.confirmPassword) {
//                 errors.confirmPassword = 'entered values do not match'
//             }
//             return errors;
//         },
//         onSubmit: values => {
//             // dispatch(loginTC(values))
//             formik.resetForm();
//         }
//     })
//
//
//     return (
//         <div>
//             <form action="" className={style.form}>
//                 <div>
//                     <span>Email</span>
//                     <input type="text" className={style.registrationInput}
//                            {...formik.getFieldProps("email")}/>
//                     {formik.touched.email && formik.errors.email ?
//                         <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
//                 </div>
//                 <div>
//                     <span>Password</span>
//                     <input type="text" className={style.registrationInput}
//                            {...formik.getFieldProps("password")}/>
//                     {formik.touched.password && formik.errors.password ?
//                         <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
//                 </div>
//                 <div>
//                     <span>Confirm Password</span>
//                     <input type="text" className={style.registrationInput}
//                            {...formik.getFieldProps("confirm password")}/>
//
//                     {formik.touched.confirmPassword && formik.errors.confirmPassword ?
//                         <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div> : null}
//                 </div>
//                 <button type={'submit'} className={style.registrationButton}>Register</button>
//             </form>
//         </div>
//     )
// }
export default {}