import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="row header">
                <div className="col-md-4">
                    <div className="logo-header row-header">e!</div>
                </div>
                <div className="col-md-8"></div>
                <div className="col-md-4" style={{ float: "right" }}>
                    <div className="login">Login</div>
                    <div className="rectangle">
                        <div className="account">Create an account</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;