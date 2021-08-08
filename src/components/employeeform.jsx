import React from 'react';
import * as Yup from 'yup';
import { Button, Grid, TextField }
 from '@material-ui/core';
 import {  Form, Field, ErrorMessage } from 'formik';


export const EmployeeForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        salary: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[A-Za-z ]*$/, 'Please Enter Valid Name').min(3).required("Required"),
        lastName: Yup.string().min(2).required("Required"),
        email: Yup.string().email("Enter Valid Email").required("Required"),
        department: Yup.string().min(3).required("Required"),
        salary: Yup.number().required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),

    });

    const { values } = ( true, validationSchema);

const handleInputChange=()=>{
    console.log();
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationSchema()) {
          let employeeData = {
         
           
          };
        }
    };

    const resetForm =()=>{

    }

    return (
        <Grid>
                <Form data-testid="Form" >
                    <Field as={TextField} data-testid="firstName" label='FirstName' name='firstName'
                        helperText={<ErrorMessage name='firstName'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter FirstName' fullWidth required />
                    <Field as={TextField} data-testid="lastName" label='LastName' name='lastName'
                        helperText={<ErrorMessage name='lastName'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter LastName' fullWidth required />
                    <Field as={TextField} data-testid="email" label='Email' name='email'
                        helperText={<ErrorMessage name='email'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter EmailId' fullWidth required />
                    <Field as={TextField} data-testid="department" label='Department' name='department'
                        helperText={<ErrorMessage name='department'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter Department' fullWidth required />
                    <Field as={TextField} data-testid="salary" label='Salary' name='salary'
                        helperText={<ErrorMessage name='salary'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter salary' fullWidth required />
                    <Field as={TextField} data-testid="password" label='Password' name='password'
                        helperText={<ErrorMessage name='Password'>{msg =>
                            <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                            onChange={handleInputChange}
                        placeholder='Enter Password' type='password' fullWidth required />
                    <div>
                        <Button data-testid="Submit" type="submit" text="Submit" />
                        <Button data-testid="Reset" text="Reset" color="default" onClick={resetForm} />
                    </div>
                </Form>
        </Grid>
    )
}