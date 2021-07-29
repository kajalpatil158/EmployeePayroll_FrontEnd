import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../scss/login.scss";
import * as Yup from 'yup';
import userEvent from '@testing-library/user-event';
/**
 * @description Login Page Is Uses For Login A User
 * @param Material UI Data is uses
 * @return Login Page
 */

const Login = () => {
    const [user, setUser] = useState({
        Email: '', Password: ''
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]:value })
    }
    const avtarStyle = { backgroundColor: 'green' }
    const initialValues = {
        Email: '',
        Password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        alert("Data Submitted Successfully");
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    const validationSchema = Yup.object().shape({
        Email: Yup.string().email("Enter Valid Email").required("Required"),
        Password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    })
    return (
        <Grid align='center' className="formStyle">
            <Paper className="paperStyle">
                <h1 align="center" className="header">
                    Employee Payroll
                </h1>
                <Grid><Avatar style={avtarStyle}><AccountBoxOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(props) =>
                    (
                        <Form>
                            <Field as={TextField} label='Email' name='Email'
                                placeholder='Enter Email'
                                helperText={<ErrorMessage name='Email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                fullwidth  
                                required />
                            <Field as={TextField} label='Password' name='Password' placeholder='Enter Password'                
                                helperText={<ErrorMessage name='Password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}     
                                type='password' fullwidth required />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button className="btnstyle" type='submit' fullWidth
                                variant='contained' disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            <Typography>
                                <Link href="#" >
                                    Forgot Password ?
                                </Link>
                            </Typography>

                            <Typography> Do you have an account?
                                <Link href="#" >
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