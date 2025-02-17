const ContactPage = () => {
    return (
        <div className='content-width'>
            <div className="col">
                <h2 className='title-font'>Get in touch</h2>
                <h2>Like what you see? Let's connect.</h2>               
            </div>
            <div>
                <form className='contact-form' name="contact" method="POST" netlify netlify-honeypot="bot-field" action='/thank-you'>
                    <p className='hidden'>
                        <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                        </label>
                    </p>
                    <input 
                        type='text'
                        placeholder='First Name (required)'
                        id='fname'
                        required
                    />
                    <input 
                        type='text'
                        placeholder='Last Name (required)'
                        id='lname'
                        required
                    />
                    <input 
                        type='email'
                        id='email'
                        placeholder='Email Address (required)'
                        required
                    />
                    <textarea 
                        rows='6'
                        placeholder='Message (required)'
                        id='message'
                        required
                    />
                    <button className='hmd-button-1' type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;