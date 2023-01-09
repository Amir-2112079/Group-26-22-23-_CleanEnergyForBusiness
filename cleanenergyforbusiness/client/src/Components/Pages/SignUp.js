
import '../CSSContents/SignUp.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SignUp() {
    const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);


    return (
        <div className='form-content'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>SignUp now using the form below!</h1>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Username
                    </label>
                    <input
                        type='username'
                        name='username'
                        className='form-input'
                        placeholder='Enter your Username'
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p> {errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p> {errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your Password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p> {errors.password}</p>}
                </div>
                <button className='form-input-btn'
                    type='submit'>SignUp
                </button>
                <span className='form-input-login'> Already have an account? Login
                    <Link to='/Login'> Here </Link>

                </span>
            </form>
        </div>
    );
}
///Handling the values

//gets the values for each field,,, possibly uses this to add the values to a DB
const useForm = (validateInfo) => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });
    //uses for the error handling 
    const [errors, setErros] = useState({});

    //when something changes it updates the value 
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    //handling the submit, prevents the page from refreshing as well asshowing the erros
    const handleSubmit = e => {
        e.preventDefault();
        setErros(validateInfo(values));
    };

    return { handleChange, values, handleSubmit, errors };
};


///Validation Part

function validateInfo(values) {
    let errors = {}
    //username used ,,,,,trim to eliminate the white spaces
    if (!values.username.trim()) {
        errors.username = 'Users name is required!'
    }
    //email
    if (!values.email) {
        errors.email = 'Email is required!'
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required'
    }
    else if (values.password.length < 6) {
        errors.password = 'Password needs to be at least 6 character long!'
    }
    return errors;
}

export default SignUp;