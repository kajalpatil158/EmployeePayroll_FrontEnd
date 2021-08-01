import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../scss/login.scss";
import * as Yup from 'yup';
import Service from '../services/user.js';
const service = new Service();
/**
 * @description Login Page Is Uses For Login A User
 * @param Material UI Data is uses
 * @return Login Page
 */

const Login = () => {
    /* const [user, setUser] = useState({
         Email: '', Password: ''
     });
     let name, value;
     const handleInputs = (e) => {
         console.log(e);
         name = e.target.name;
         value = e.target.value;
         setUser({ ...user, [name]:value })
     }*/
    const avtarStyle = { backgroundColor: 'green' }
    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values, props) => {
        console.log(values);
     //   if (values) {
            const userDetails = {
                emailId: values.email,
                password: values.password,          
            };          
            console.log(userDetails);
            service.login(userDetails)
                .then((res) => {
                    if (res.data.success === true) {
                        alert("Data Is Added");
                        localStorage.setItem('token', res.data.token)
                    } else {
                        alert("Something Wrong");
                    }
                })
                .catch((error) => {
                    alert(error.message);
                    console.log(error);
                });
            /* setTimeout(() => {
                 props.resetForm()
                 props.setSubmitting(false)
             }, 2000)*/
       // }
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter Valid Email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    })
    return (
        <Grid align='center' className="formStyle">
            <Paper className="paperStyle">
                <h2 align="center" className="header">
                    Employee Payroll App
                </h2>
                <Grid><Avatar style={avtarStyle}><AccountBoxOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(props) =>
                    (
                        <Form>
                            <Field as={TextField} label='Email' name='email' 
                                placeholder='Enter Email'
                                helperText={<ErrorMessage name='email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                fullwidth
                                required />
                            <Field as={TextField} label='Password'  name='password' placeholder='Enter Password'
                                helperText={<ErrorMessage name='password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
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
                                value='Rgister' 
                                variant='contained' disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            <Typography>
                                <Link href="#" >
                                    Forgot Password ?
                                </Link>
                            </Typography>

                            <Typography> Do you have an account?
                                <Link to={'/'} >Sign In</Link>
                            </Typography>
                        </Form>)}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Login;
