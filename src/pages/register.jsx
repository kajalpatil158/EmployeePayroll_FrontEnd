import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../scss/register.scss'
/**
 * @description Registration Page Is Uses For Register A User
 * @param Material UI Data is uses
 * @return Registration Page 
 */

const Register = () => {
    const avtarStyle = { backgroundColor: 'red' }
    const initialValues = {
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',

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
        FirstName: Yup.string().min(3).required("Required"),
        LastName: Yup.string().min(2).required("Required"),
        Email: Yup.string().email("Enter Valid Email").required("Required"),
        Password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        ConfirmPassword: Yup.string().oneOf(
            [Yup.ref("Password")],
            "Passwords Not Matched"
        ).required("Required"),
    });
    return (
        <Grid align='center' className="formStyle">
            <Paper className="paperStyle">
                <h1 align="center" className="header">
                    Employee Payroll
                </h1>
                <Grid><Avatar style={avtarStyle}><AccountBoxOutlinedIcon /></Avatar>
                    <h2>Register</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit} >
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='FirstName' name='FirstName'
                                helperText={<ErrorMessage name='lastName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter FirstName' fullWidth requied />
                            <Field as={TextField} label='LastName' name='LastName'
                                helperText={<ErrorMessage name='LastName' />} placeholder='Enter LastName' fullWidth requied />
                            <Field as={TextField} label='Email' name='Email'
                                helperText={<ErrorMessage name='Email' />} placeholder='Enter EmailId' fullWidth requied />
                            <Field as={TextField} label='Password' name='Password'
                                helperText={<ErrorMessage name='Password' />} placeholder='Enter Password' type='password' fullWidth requied />
                            <Field as={TextField} label='ConfirmPassword' name='ConfirmPassword'
                                helperText={<ErrorMessage name='ConfirmPassword' />} placeholder='Enter ConfirmPassword' type='password' fullWidth requied />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button className="btnstyle" type='submit' color='primary' fullWidth
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

export default Register;
