const ContactForm = () => {
    return (
        <div>
            <form className='contact-form' name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action='/thank-you'>
                <p className='hidden'>
                    <label>
                    Don’t fill this out if you’re human: 
                        <input name="bot-field" />
                    </label>
                </p>
                <input 
                    type='text'
                    placeholder='First Name (required)'
                    id='fname'
                    name='fname'
                    required
                />
                <input 
                    type='text'
                    placeholder='Last Name (required)'
                    id='lname'
                    name='lname'
                    required
                />
                <input 
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email Address (required)'
                    required
                />
                <textarea 
                    rows='6'
                    placeholder='Message (required)'
                    id='message'
                    name='message'
                    required
                />
                <button className='hmd-button-1' type='submit'>Send</button>
            </form>

        </div>
    )
};

export default ContactForm;