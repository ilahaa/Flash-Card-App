import React, { useState } from 'react';
import '../src/style/contactMe.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    setMessageSent(true); 
                    setFormData({ 
                        name: '',
                        email: '',
                        message: '',
                    });
                    setTimeout(() => {
                        setMessageSent(false); // Hide the message after 3 seconds
                    }, 3000);
                } else {
                    console.error('Error sending message:', response.status, response.statusText);
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    };
    return (
        <div className='contactMe'>
            <h1>Contact Me</h1>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-6">
                        <img className='gifImg' src="https://images.squarespace-cdn.com/content/v1/5fb6ae7440ecb130e0423409/1612814076750-K0I7IXOK3QN8RYOBAFD3/Contact+us.gif" alt="" />
                    </div>
                    <div className="col-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control form-control-lg thick"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* E-mail */}
                            <div className="form-group position-relative">
                                <label htmlFor="email" className="d-block">
                                    <i className="icon" data-feather="mail" />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control form-control-lg thick"
                                    placeholder="E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Message */}
                            <div className="form-group message">
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control form-control-lg"
                                    rows={7}
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* Submit btn */}
                            <div className="text-center">
                            {messageSent && <p className="success-message">Message sent successfully!</p>}
                                <button type="submit" className="btn btn-primary" tabIndex={-1}>
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe