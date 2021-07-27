import React from 'react';

const Register = () => {
    return (
        <form action=''>
        <div>
        <h3>Registration Form</h3>
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

        
        <div class="Submit-reset">
        <button type="submit" class="button submitButton" id="submitButton">Submit</button>
    </div>
        </form>
    )
}

export default Register;