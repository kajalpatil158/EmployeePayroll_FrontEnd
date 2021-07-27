import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const Login = () => {
    const paperStyle = { padding: 20, height: '60vh', width: 200, margin: '20px auto' }
    const avtarStyle = { backgroundColor: 'green' }
    const btnStyle = { margin: '8px 0' }
    return (
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
                <Grid><Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter EmailId' fullwidth requied />
                <TextField label='Password' placeholder='Enter Password' type='password' fullwidth requied />
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
            </Paper>
        </Grid>
    )
}

export default Login;