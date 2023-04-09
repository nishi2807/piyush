import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import background from './project-1.png';
const SignupPage = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const [user, setUser] = useState({
    //     email: "", password: ""
    // });

    // let name, value;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Do something with the response data, such as setting it in state
                console.log(data);
            } else {
                // Handle the error response from the server
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='signup-main-container'>
            <div className='signup-blur-container'>
                <h1 className='signup-title'>Sign up</h1>
                <Form onSubmit={handleSubmit} method='POST'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label id='signup-subheading'>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label id='signup-subheading'>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name='password'
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <button type="submit" name='signup' className="signup-btn" >Sign up</button>
                    <div className='signup-bottom-text'>
                        <p>
                            Already have an account? <Link to="/">Login here</Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignupPage;