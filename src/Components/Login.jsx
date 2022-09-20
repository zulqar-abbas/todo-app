import React, { useRef, useState } from 'react';
import classes from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onEmailChange = () => {
        console.log(emailRef.current?.value)
        setEmail(emailRef.current?.value)
    };

    const onPasswordChange = () => {
        console.log(passwordRef.current?.value)
        setPassword(passwordRef.current?.value)
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // Login Details
        const loginForm = {
            email,
            password,
        }
        console.log(loginForm);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container">
            {/* <form onSubmit={onSubmitHandler}>
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>


                <input type="email" name="email" placeholder='email' id="email" ref={emailRef} onInput={onEmailChange} />
                <input type="password" name="password" id="password" placeholder='password' ref={passwordRef} onInput={onPasswordChange} />
                <button type='submit'>Login</button>
            </form> */}



            <form>
                <h3>Sign In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            Test Login Component
        </div>
    );
};

export default Login;