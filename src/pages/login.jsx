import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
/**
 * @description Login Page Is Uses For Login A User
 * @param Material UI Data is uses
 * @return Login Page
 */

const Login = () => {
    const paperStyle = { padding: 20, height: '60vh', width: 200, margin: '20px auto' }
    const avtarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        Email: '',
        Password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
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
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
                <Grid><Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    {(props) =>
                    (
                        <Form>
                            <Field as={TextField} label='Email' name='Email' placeholder='Enter Email'
                                helperText={<ErrorMessage name='Email' />} fullwidth requied />
                            <Field as={TextField} label='Password' name='Password' placeholder='Enter Password'
                                helperText={<ErrorMessage name='Password' />} type='password' fullwidth requied />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' style={btnStyle} fullWidth
                                variant='contained' disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            <Typography>
                                <Link href="#" >
                                    Forgot Password ?
                                </Link>
                            </Typography>

                            <Typography> Do you have an account ?
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