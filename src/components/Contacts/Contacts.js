import React from 'react';
import emailjs from 'emailjs-com';
import {Form, Input, Button, TextArea} from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './Contacts.css';

function Contacts() {

    const SERVICE_ID ="service_fj9dkxj"
    const TEMPLATE_ID ="template_s90me8a"
    const USER_ID ="8544wOHxpxmAkHLwn"

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                
            });
            e.target.reset()
    }
    return (
        <div className='contact-form'>
            <div>
                <h3>Leave us a message..</h3>
            </div>
            <form className='mails' onSubmit={sendEmail}>
                <Form.Field
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='user_email'
                placeholder='Email'
                type='email'
                icom='mail'
                iconPosition='left'
                />
                <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Name'
                name='user_name'
                placeholder='Name'
                required
                icon='user circle'
                iconPosition='left'
                />
                <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                name='user_message'
                placeholder='Message'
                required
                />
                <Button id='send-btn' type='submit' color='green'>Send</Button>
            </form>
        </div>
    );
}

export default Contacts;