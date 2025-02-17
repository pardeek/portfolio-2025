const ContactForm = () => {
    return (
        <div>
            <form className='contact-form' name="contact" method="POST" netlify netlify-honeypot="bot-field" action='/thank-you'>
                <p className='hidden'>
                    <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>
                <input 
                    type='text'
                    placeholder='First Name'
                    id='fname'
                />
                <input 
                    type='text'
                    placeholder='Last Name'
                    id='lname'
                />
                <input 
                    type='email'
                    id='email'
                    placeholder='Email Address'
                />
                <textarea 
                    rows='6'
                    placeholder='Message'
                    id='message'
                />
                <button className='hmd-button-1' type='submit'>Send</button>
            </form>

        </div>
    )
};

export default ContactForm;