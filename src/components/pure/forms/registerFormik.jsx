import React from 'react';
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup'

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string().min(6, 'Name too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string().email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a ROL!').required('Role is REquired'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match!'
                    )
                }).required('You must confirm the password')


        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>

            <Formik
                initialValues={initialValues}

                validationSchema={registerSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));

                }}>

                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    hadleChange,
                    hableBlur
                }) => (

                    <Form>
                        <label htmlFor="userName">userName</label>
                        <Field id="userName" type="text" name="userName" placeholder="Your user name" />

                        {/* User error */}
                        {
                            errors.userName && touched.userName && (


                                <ErrorMessage name="userName" component='div' ></ErrorMessage>
                            )
                        }
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />
                        {/* Email error */}
                        {
                            errors.email && touched.email && (


                                <ErrorMessage name="email" component='div' ></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password && (
                                <ErrorMessage name="password"></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="confirm"
                        />
                            {/* Confirm password */}
                        {
                            errors.confirm && touched.confirm && (
                                <ErrorMessage name="confirm"></ErrorMessage>
                            )
                        }
                        <button type="submit">REgister Account</button>
                        {isSubmitting ? <p>Sending your credentials </p> : null}
              

                    </Form>
                )}


            </Formik>
        </div>
    );
}

export default RegisterFormik;
