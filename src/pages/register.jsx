import React from 'react';
import { Avatar, Grid, Paper} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = () => {
    const paperStyle={padding:20,height:'70vh',width:200,margin:'20px auto'}
    return (
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
            <Grid><Avatar><LockOutlinedIcon /></Avatar>
            <h2>Register</h2>
            </Grid>
            </Paper>
        </Grid>
    )
}

export default Register;