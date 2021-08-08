import React from 'react';
import { Grid } from '@material-ui/core';


export const EmployeeForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        department:'',
        salary:'',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().matches(/^[A-Za-z ]*$/,'Please Enter Valid Name').min(3).required("Required"),
        lastName: Yup.string().min(2).required("Required"),
        email: Yup.string().email("Enter Valid Email").required("Required"),
        department:Yup.string().min(3).required("Required"),
        salary:Yup.number().required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
       
    });
}