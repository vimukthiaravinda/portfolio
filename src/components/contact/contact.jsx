import 'react';
import './contact.css'
import mail_icon from '../../assets/mail.svg'
import location_icon from '../../assets/location_on.svg'
import phone_icon from '../../assets/phone_in_talk.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "634aba69-4920-4e6d-82aa-6c68d57a1489");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            window.alert("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            window.alert(data.message);
        }
    };
    return (
        <div id = 'contact' className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p>If you interested in my portfolio please send me message. If you like to hire me lets talk through this number.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt=""/>
                            <p>vimukthiaravinda18@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt=""/>
                            <p>Colombo, Sri Lanka</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone_icon} alt=""/>
                            <p>+94 7720 43 140</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder="Enter Your Name" required/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name='email' placeholder="Enter Your Email" required/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name='message' rows="10" placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;