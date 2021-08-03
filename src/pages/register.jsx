import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography }
 from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccountBoxOutlinedIcon from 
'@material-ui/icons/AccountBoxOutlined';
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../scss/register.scss';
import service from '../services/user.js';
/**
 * @description Registration Page Is Uses For Register A User
 * @param Material UI Data is uses
 * @return Registration Page 
 */

export const Register = () => {
    const avtarStyle = { backgroundColor: 'red' }
    const initialValues = {
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        confirmPassword: '',

    }
    const onSubmit = (values, props) => {
            const userDetails = {
            firstName: values.firstName,
              lastName: values.lastName,
              emailId: values.emailId,
              password: values.password,
              confirmPassword: values.ConfirmPassword,
            };
        service.register(userDetails)
        .then((res) => {
          if (res.data.success === true) {
            alert("Data Is Added");
          } else {
            alert("Something Wrong");
          }
        })
        .catch((error) => {
            console.log(error);
          });
      
 }
 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[A-Za-z ]*$/,'Please Enter Valid Name').min(3).required("Required"),
        lastName: Yup.string().min(2).required("Required"),
        emailId: Yup.string().email("Enter Valid Email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("Password")],
            "Passwords Not Matched"
        ).required("Required"),
    });
    return (
        <Grid align='center' className="formStyle">
            <Paper className="paperStyle">
                <h2 data-testid="h2">
                    Employee Payroll App
                </h2>
                <Grid><Avatar data-testid="avatar" style={avtarStyle}><AccountBoxOutlinedIcon /></Avatar>
                    <h2>Register</h2>
                </Grid>
                <Formik initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit} >
                    {(props) => (
                        <Form data-testid="Form">
                            <Field as={TextField} data-testid="firstName" label='FirstName' name='firstName'
                                helperText={<ErrorMessage name='firstName'>{msg =>
                                    <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter FirstName' fullWidth required />
                            <Field as={TextField} data-testid="lastName" label='LastName' name='lastName'
                                helperText={<ErrorMessage name='lastName'>{msg =>
                                    <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter LastName' fullWidth required />
                            <Field as={TextField} data-testid="email" label='Email' name='emailId'
                                helperText={<ErrorMessage name='emailId'>{msg =>
                                    <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter EmailId' fullWidth required />
                            <Field as={TextField} data-testid="password" label='Password' name='password'
                                helperText={<ErrorMessage name='Password'>{msg =>
                                    <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter Password' type='password' fullWidth required />
                            <Field as={TextField} data-testid="confirmPassword" label='ConfirmPassword' name='confirmPassword'
                                helperText={<ErrorMessage name='confirmPassword'>{msg =>
                                    <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                placeholder='Enter ConfirmPassword' type='password' fullWidth required />
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button data-testid="button" className="btnstyle" type='submit' color='primary' fullWidth
                                variant='contained' disabled={props.isSubmitting}>
                                {props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                            <Typography>
                               
                            </Typography>

                            <Typography> Do you have an account ?
                            
                            </Typography>
                        </Form>)}
                </Formik>
            </Paper>
        </Grid>
    )
}
