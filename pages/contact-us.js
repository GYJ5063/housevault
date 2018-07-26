import React, { Component } from 'react';
import axios from 'axios';
import FormValidator from '../components/FormValidator';
import Layout from '../components/Layout'
class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'subject',
                method: 'isEmpty',
                validWhen: false,
                message: 'Subject is required.'
            },
            {
                field: 'message',
                method: 'isEmpty',
                validWhen: false,
                message: 'Message is required.'
            }
        ]);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            validation: this.validator.valid(),
            hideLoadingSpinner: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.submitted = false;
    }

    handleChange (e) {
        let newState = {}

        newState[e.target.name] = e.target.value

        this.setState(newState)
    }

    handleSubmit (e, message) {
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        let formData = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        if (validation.isValid) {
            this.setState({hideLoadingSpinner: false});

            axios.get(process.env.BACKEND_URL +"/contact-us/send/" + formData.name + '/' + formData.email + '/' + formData.subject + '/' + formData.message ).then(response => {
                this.setState({hideLoadingSpinner: true});
                alert("Thank you for contacting us, we will get back to you shortly.");
            })
        }
    }

    render() {
            let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation

        if(!this.state.hideLoadingSpinner) {
            return (
                <div className="container">
                    <div className="loading" >
                        <i className="fa fa-spinner fa-spin fa-10x"></i>
                    </div>
                </div>
            )
        }
        return (
            <div className="container list-page-padding">
                <Layout>
                <h1>Contact Us</h1>
                <div className="row">
                    <div className="col">
                    <form onSubmit={this.handleSubmit}>
                        <div className="alert alert-danger d-none">
                            <strong>Whoops!</strong> There were some problems with your input.
                            <br/>
                            <ul id="errMsg">
                            </ul>
                        </div>

                        <div className="row">
                            <span className="col-sm-2">&nbsp;</span>
                            <span id="err_name" className="col-sm-8 errText">{validation.name.message}</span>
                        </div>
                        <div className="row margin-bottom-1">
                            <span className="col-sm-2"><label htmlFor="name">Name</label></span>
                            <input type="text" name="name" id="name" value={this.state.name} className="field col-sm-8" placeholder="Name" onChange={this.handleChange} /><br/>
                        </div>

                        <div className="row">
                            <div className="col-sm-2">&nbsp;</div>
                            <span id="err_email" className="col-sm-8 errText">{validation.email.message}</span>
                        </div>
                        <div className="row margin-bottom-1">
                            <span className="col-sm-2"><label htmlFor="email">Email</label></span>
                            <input type="text" name="email" id="email" value={this.state.email} className="field col-sm-8" placeholder="Email Address" onChange={this.handleChange} /><br/>
                        </div>


                        <div className="row">
                            <div className="col-sm-2">&nbsp;</div>
                            <span id="err_subject" className="col-sm-8 errText">{validation.subject.message}</span>
                        </div>
                        <div className="row margin-bottom-1">
                            <span className="col-sm-2"><label htmlFor="subject">Subject</label></span>
                            <input type="text" name="subject" id="subject" value={this.state.subject} className="field col-sm-8" placeholder="Subject" onChange={this.handleChange} /><br/>
                        </div>


                        <div className="row">
                            <div className="col-sm-2">&nbsp;</div>
                            <span id="err_message" className="col-sm-8 errText">{validation.message.message}</span>
                        </div>
                        <div className="row margin-bottom-1">
                            <span className="col-sm-2"><label htmlFor="message">Message</label></span>
                            <textarea className="field col-sm-8 withTinyBorder" name="message" rows="4" cols="50" value={this.state.message} onChange={this.handleChange} ></textarea><br/><br/>
                        </div>

                        <div className="g-recaptcha" data-sitekey="6LfWmFIUAAAAAGCKHh1P4bQRiZqoVMaoil_fI1N-"></div>

                        <button onClick={this.handleFormSubmit} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                    </div>
                </div>
                </Layout>
            </div>
            );
    }
}

export default ContactUs;
