import 'react';
import './footer.css';

const Footer = () => {
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
            window.alert("Number Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            window.alert(data.message);
        }
    };
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="title-name">Vim.Dev</div>
                    <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. </p>
                </div>
                <div className="footer-top-right">
                    <p>Send me your Contact</p>
                    <form className="contact-number" onSubmit={onSubmit}>
                        <input type="tel" name='number' placeholder="Enter Your Number" required/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p>Copyright © 2025 Vimukthi Aravinda. All copy rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;