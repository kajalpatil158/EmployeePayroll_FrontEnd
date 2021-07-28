import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form } from 'formik';
/**
 * @description Registration Page Is Uses For Register A User
 * @param Material UI Data is uses
 * @return Registration Page 
 */

 const Register = () => {
    const paperStyle = { padding: 20, height: '80vh', width: 200, margin: '20px auto' }
    const avtarStyle = { backgroundColor: 'red' }
    const btnStyle = { margin: '8px 0' }
    return (
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
                <Grid><Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Register</h2>
                </Grid>
                <Formik>
                <TextField label='FirstName' placeholder='Enter FirstName' fullwidth requied />
                <TextField label='LastName' placeholder='Enter LastName' fullwidth requied />
                <TextField label='Email' placeholder='Enter EmailId' fullwidth requied />
                <TextField label='Password' placeholder='Enter Password' type='password' fullwidth requied />
                <TextField label='ConfirmPassword' placeholder='Enter ConfirmPassword' type='password' fullwidth requied />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' style={btnStyle} fullWidth variant='contained'>Sign In</Button>
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
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Register;
