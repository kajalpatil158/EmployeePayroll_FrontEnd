import React from 'react';
import { Avatar, Grid, Paper,TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = () => {
    const paperStyle={padding:20,height:'70vh',width:200,margin:'20px auto'}
    const avtarStyle={backgroundColor:'red'}
    return (
        <Grid align='center'>
            <Paper elevation={15} style={paperStyle}>
            <Grid><Avatar style={avtarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Register</h2>
            </Grid>
            <TextField label='FirstName' placeholder='Enter FirstName' fullwidth requied/>
            <TextField label='LastName' placeholder='Enter LastName' fullwidth requied/>
            <TextField label='Email' placeholder='Enter EmailId' fullwidth requied/>
            <TextField label='Password' placeholder='Enter Password' type='password' fullwidth requied/>
            <TextField label='ConfirmPassword' placeholder='Enter ConfirmPassword' type='password' fullwidth requied/>
            </Paper>
        </Grid>
    )
}

export default Register;