import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from "formik";
/**
 * @description Login Page Is Uses For Login A User
 * @param Material UI Data is uses
 * @return Login Page
 */

const Login = () => {
    const paperStyle = { padding: 30, height: '60vh', width: 200, margin: '80px auto' }
    const avtarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '8px 0' }
    const initialvalues={
        Email='',
        Password='',
        termconditions=false
    }
    return (
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
                <Grid><Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <formik initialvalues>{
                    (props)=>(
                        <Form>
                    <TextField  label='Email' name='Email' placeholder='Enter EmailId' fullwidth requied />
                    <TextField label='Password' name='Password' placeholder='Enter Password' type='password' fullwidth requied />
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
                    </Form>)}
                   </formik>
                
            </Paper>
        </Grid>
    )
}

export default Login;