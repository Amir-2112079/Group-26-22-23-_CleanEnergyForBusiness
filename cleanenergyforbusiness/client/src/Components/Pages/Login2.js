import "../CSSContents/newLog.css";
//add useEffect to save users login
import React, { useState } from "react";
import axios from 'axios';


function Login2() {

    //Saving the values in the form variable
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    //mode determines whether the form should disply login or register
    const [mode, setMode] = useState('login');
    const [errors, setErrors] = useState({});
    //message is used to disply any form of error to the user
    const [message, setMessage] = useState('');


    //it updates the users values in case a change has been made 
    //used a spread operator to update the form by targeting .name and .value 
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const validateInfo = (form) => {
        let errors = {};
        if (!form.username.trim()) {
            errors.username = 'Username is required!';
        }
        if (!form.email) {
            errors.email = 'Email is required!';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!form.password) {
            errors.password = 'Password is required';
        } else if (form.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long!';
        }

        return errors;
    };




    //it is used when the form is submitted, sends message to the backend to either login or register
    //if successful/denied  response is saved in message
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateInfo(form)
        setErrors(errors);

        //check to see if the password is grater than 6
        if (form.password.length >= 6) {

            if (mode === 'login') {
                axios.post('http://localhost:4000/login', form)
                    .then((response) => {
                        if (response.data === 'Logged in successfully') {
                            setMessage('Logged in successfully');
                            window.location.href = '/';
                            //  localStorage.setItem('user', JSON.stringify(form));
                        } else {
                            setMessage('Login was unsuccessful, check your inputs!');
                        }

                    })

            } else {
                axios.get(`http://localhost:4000/checkUser/${form.username}`)
                    .then((response) => {
                        if (response.data === 'User exists') {
                            setMessage('User already exists');
                            return;
                        } else {
                            axios.post('http://localhost:4000/register', form)
                                .then((response) => {
                                    setMessage(response.data);
                                    //  localStorage.setItem('user', JSON.stringify(form));
                                })
                        }
                    })
                    .catch((error) => {
                        setMessage("you must complete the form before submitting");
                    });

            }
            setErrors(errors);
        }
    };

    /*
    const user = localStorage.getItem("user");
    
        if (user) {
            form = JSON.parse(user);
            setMode("login");
            setMessage("Logged in successfully");
        }
    
    */

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
                {<p> {errors.username}</p>}
                {mode === 'register' && (
                    <>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {<p> {errors.email}</p>}
                    </>
                )}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <p> {errors.password}</p>

                <button type="submit">
                    {mode === 'login' ? 'Login' : 'Register'}
                </button>

                <button type="button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
                    Switch to {mode === 'login' ? 'Register' : 'Login'}
                </button>
            </form>
            {<p>{message}</p>}
        </div>
    );
};
//{errors.username && <p> {errors.username}</p>} for the errors
//window.location.href ='/newPage';
//ternary operator

export default Login2;


/*
//insert in the login
window.localStorage.setItem('isLoggedIn', true);

  useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
            setMessage("Logged in successfully");
            window.location.href = '/';
        }
    }, []);
*/


