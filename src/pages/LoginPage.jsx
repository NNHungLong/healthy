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
      <h1 className='mb-4 text-2xl font-bold'>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className='mb-2 block'>
          Username:
          <input
            className='w-full rounded-md border border-gray-300 px-3 py-2'
            type='text'
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label className='mb-2 block'>
          Password:
          <input
            className='w-full rounded-md border border-gray-300 px-3 py-2'
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button
          className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
