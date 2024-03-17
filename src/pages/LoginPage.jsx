import { useState } from 'react';
import axiosClient from 'utils/axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post('api/login', { username, password })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
      <h1 className='text-2xl font-bold mb-4'>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className='block mb-2'>
          Username:
          <input
            className='border border-gray-300 rounded-md px-3 py-2 w-full'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label className='block mb-2'>
          Password:
          <input
            className='border border-gray-300 rounded-md px-3 py-2 w-full'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
