import React, { useState } from 'react';
import './styles.css';
import image from '../assets/logo.png'

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!username.match(emailRegex)) {
            setErrorMessage('Please enter a valid email address');
            setUsername('');
            setPassword('');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (!password.match(passwordRegex)) {
            setErrorMessage('Password must contain an uppercase letter, a number, and a special character (@)');
            setUsername('');
            setPassword('');
            return;
        }

        setErrorMessage('');

        console.log('Form submitted');
    };

    return (
        <div className="container">
            <div className="card">
                <img src={image} alt="Logo" className="logo" />
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <input type="submit" value="Login" className="input-field submit-btn" />
                </form>
                <a className="forget-password" href="#">Forgot your password?</a>
            </div>
        </div>
    );
}

export default App;
