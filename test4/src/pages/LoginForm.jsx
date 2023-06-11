import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

const login = async (credentials) => {
// Perform the login request and return the response
const response = await fetch('/api/login', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(credentials),
});
const data = await response.json();
return data;
};

const LoginForm = () => {
const queryClient = useQueryClient();

const { mutate, isLoading, isError, error } = useMutation(login, {
onSuccess: () => {
    // Invalidate and refetch relevant queries after successful login
    queryClient.invalidateQueries('user');
    queryClient.invalidateQueries('notifications');
},
});

const handleSubmit = (e) => {
e.preventDefault();
const { username, password } = e.target.elements;
mutate({ username: username.value, password: password.value });
};

if (isLoading) {
return <div>Loading...</div>;
}

if (isError) {
return <div>Error: {error.message}</div>;
}

return (
<div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
    </div>
    <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Login</button>
    </form>
</div>
);
};

export default LoginForm;
