import "../CSSContents/ResetPassword.css";
import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      setError('Email is required');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return;
    }

    axios.get(`http://localhost:4000/checkEmail/${email}`)
      .then((response) => {
        console.log(response.data);
        if (response.data === 'Email does not exist') {
          setError('Email does not exist');
          return;
        }
        axios.post('http://localhost:4000/resetPassword', { email, password })
          .then((response) => {
            console.log(response.data);
            // reset form and show success message
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
            alert('Password reset successfully');
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">New Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
      {error && <div>{error}</div>}
    </div>
  );
}

export default ResetPassword;