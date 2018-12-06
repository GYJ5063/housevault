import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            reset:false,
        };

        this.toggle = this.toggle.bind(this);
        this.reset = this.reset.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    reset(e) {
        e.preventDefault();

        this.setState({
            reset: !this.state.reset
        });
    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm navbar-expand-lg">
                    <a href="/" title="House Vault" className="logo navbar-brand"><img
                        src="/static/housevault-logo.svg" alt="Logo" width="200"/></a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a onClick={this.toggle}>Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className="login-modal">
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>
                        {(this.state.reset) ? <ForgotPassword /> : <Login reset={this.reset} /> }
                    </ModalBody>

                </Modal>
            </div>
        );

    }
}
export default Header;