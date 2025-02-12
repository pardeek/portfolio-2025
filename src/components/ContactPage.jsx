import ContactForm from "./ContactForm";

const ContactPage = () => {
    return (
        <div className='content-width'>
            <div className="col">
                <h2 className='title-font'>Get in touch</h2>
                <h2>Like what you see? Let's connect.</h2>               
            </div>
            <ContactForm cliend:load />
        </div>
    )
}

export default ContactPage;