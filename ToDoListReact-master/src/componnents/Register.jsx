import React, { useState } from 'react';
import service from '../service';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !password) {
            setError('Both fields are required.');
            return;
        }

        try {
            const userId = await service.register(name, password);
            if (userId) {
                setName('');
                setPassword('');
                alert('Registration successful!');
                navigate('/App');
            } else {
                setError('Registration failed');
            }
        } catch (error) {
            setError('Error registering user: ' + error.message);
        }
    };

    return (
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Register now</button>
                {/* <button type="button" onClick={() => navigate('/')}></button> */}
            </form>
        </div>
    );
};

export default Register;