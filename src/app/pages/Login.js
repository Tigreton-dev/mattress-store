import React from 'react';
import { useForm } from "react-hook-form";
import { Spinner } from 'reactstrap';

const Login = props => {
    const { auth } = props;
    const { handleSubmit, register, errors } = useForm();
    const submitLogin = e => {
        props.onAuth(e.Password, e.Name);
    }

    let loading = null;
    if (props.isAuthenticated) Router.push('/index');
    if (props.loading) loading = <Spinner />

    return (
        <div className="login-container">
            <h1>Login</h1>
            {loading}
            <div className="ContainerLogin">
                <form onSubmit={handleSubmit(submitLogin)}>
                    <input placeholder="Name" name="Name" ref={register({ required: true })} />
                    {errors.Name && 'Name is required.'}

                    <input placeholder="Password" name="Password" ref={register({ required: true })} />
                    {errors.Password && 'Password is required.'}
                    <button type="submit">Sign In</button>
                </form>
                <p className="license">Project Designed and created by JaviSan</p>
            </div>
        </div>
    );
};

export default Login;
