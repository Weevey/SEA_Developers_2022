import React from "react";
import logo from './images/qalogo.svg';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <a href="https://www.qa.com" target="_blank" rel="noreferrer" className="navbar-brand">
                    <img src={logo} alt="QA Ltd" style= {{width:'100px'}}></img>
                </a>
                <a href="/" className="navbar-brand">Todo App</a>
                </nav>
        </header>
    );
};
export default Header;

//brew install node@16  brew unlink node brew link node@16  node -v