import React from 'react';

const Register = () => {
    return (
        <form action=''>
        <div>
        <h2>Registration Form</h2>
        </div>

        <div>
        <label htmlFor='firstName'>FirstName </label>
        <input type='text' autoComplete='off' name='firstName' id='firstName'/>
        </div>

        <div>
        <label htmlFor='lastName'>LastName</label>
        <input type='text' autoComplete='off' name='lastName' id='lastName'/>
        </div>

        <div>
        <label htmlFor='email'>Email</label>
        <input type='text' autoComplete='off' name='email' id='email'/>
        </div>

        <div>
        <label htmlFor='password'>Password</label>
        <input type='text' autoComplete='off' name='password' id='password'/>
        </div>

        <div>
        <label htmlFor='confirmpassword'>ConfirmPassword</label>
        <input type='text' autoComplete='off' name='confirmpassword' id='confirmpassword'/>
        </div>
        </form>
    )
}

export default Register;