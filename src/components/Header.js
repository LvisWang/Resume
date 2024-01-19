// Header.js
import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header className="header-container">
            <img src="/images/avatar.png" alt="Avatar" className="avatar" />
            <div className="header-text">
                <h1>Louis(Chenjie) Wang </h1>
                <h3>
                    <a href="https://twitter.com/lviswang"> Twitter</a> |
                    <a href="https://t.me/LvisWang" target="_blank" rel="noopener noreferrer"> Telegram </a> | 
                    <a href="https://linkedin.com/in/lviswang" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
                    <a href="mailto:louiswangcj@gmail.com"> Email</a> |
                    <a href="https://github.com/LvisWang"> Github</a>
                </h3>
            </div>
        </header>
    );
};

export default Header;
