import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const dispatch = useDispatch();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, password }));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
