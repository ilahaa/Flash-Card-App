import React from 'react';
import "../src/style/contactMe.css";

const ContactMe = () => {
    return (
        <div className='contactMe'>
            <h1>Contact Me</h1>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-6">
                        <img className='gifImg' src="https://images.squarespace-cdn.com/content/v1/5fb6ae7440ecb130e0423409/1612814076750-K0I7IXOK3QN8RYOBAFD3/Contact+us.gif" alt="" />
                        </div>
                    <div className="col-6">
                    <form>
                    <div className="form-group">
                        <input
                            type="text"
                            id="formName"
                            className="form-control form-control-lg thick"
                            placeholder="Name"
                        />
                    </div>
                    {/* E-mail */}
                    <div className="form-group position-relative">
                        <label htmlFor="formEmail" className="d-block">
                            <i className="icon" data-feather="mail" />
                        </label>
                        <input
                            type="email"
                            id="formEmail"
                            className="form-control form-control-lg thick"
                            placeholder="E-mail"
                        />
                    </div>
                    {/* Message */}
                    <div className="form-group message">
                        <textarea
                            id="formMessage"
                            className="form-control form-control-lg"
                            rows={7}
                            placeholder="Message"
                            defaultValue={""}
                        />
                    </div>
                    {/* Submit btn */}
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" tabIndex={-1}>
                            Send message
                        </button>
                    </div>
                </form>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ContactMe