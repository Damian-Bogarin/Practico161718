import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';

const loginSchema = Yup.object().shape(

   

    {
        email: Yup.string()
            .email(' Invalid Email format ')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')

    }
)

const LoginFormik = () => {

    const navigate = useNavigate();


    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik

                //Initial Values that the form will  take
                initialValues={initialCredentials}

                // Yup Validation Schema 
                validationSchema={loginSchema}


                //On submit event 
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));

                    // We save data in local storage
                    localStorage.setItem('credentials', values)
                    navigate('/')
                }}>

                {/* we obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                    <Form>
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
                        <button type="submit">Submit</button>

                        {isSubmitting ? <p>Login your credentials </p> : null}
                    </Form>
                )}




            </Formik>
        </div>

    );
};





export default LoginFormik;
