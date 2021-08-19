import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../scss/login.scss";
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import Service from '../services/user.js';
const service = new Service();
/**
 * @description Login Page Is Uses For Login A User
 * @param Material UI Data is uses
 * @return Login Page
 */

export const Login = () => {
    const history = useHistory();
    const avtarStyle = { backgroundColor: 'green' }
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values, props) => {
        console.log(values);
            const userDetails = {
                emailId: values.email,
                password: values.password,          
            };          
            console.log(userDetails);
            service.login(userDetails)
                .then((res) => {
                    if (res.data.success === true) {
                        localStorage.setItem('token', res.data.token)
                        history.push('/dashboard');
                    } else {
                        alert("Something Wrong");
                    }
                })
                .catch((error) => {
                    alert(error.message);
                    console.log(error);
                });
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter Valid Email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    })
    return (
        <Grid align='center' className="formStyle">
            <Paper className="paperStyle">
                <h2 data-testid="h2">
                    Employee Payroll App
                </h2>
                <Grid><Avatar data-testid="avatar" style={avtarStyle}><AccountBoxOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(props) =>
                    (
                        <Form data-testid="Form">
                            <Field as={TextField} data-testid="Email" label='Email' name='email' 
                                placeholder='Enter Email'
                                helperText={<ErrorMessage name='email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                fullwidth
                                required />
                            <Field as={TextField} data-testid="password" label='Password'  name='password' placeholder='Enter Password'
                                helperText={<ErrorMessage name='password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                type='password' fullwidth required />
                           
                            <Button data-testid="button" className="btnStyle" type='submit' fullWidth
                                value='Rgister' label='Button'
                                variant='contained' disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                               <Typography>
                                <Link href="#" >
                                    Forgot Password ?
                                </Link>
                            </Typography>

                            <Typography> Do you have an account ?
                                <Link href="/dashboard" >
                                    Sign Up
                                </Link>
                            </Typography>
                        </Form>)}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Login;
