import 'react';
import './Hero.css'
import HeroImage from '../../assets/vimukthi_profile.png';
import ResumePDF from '../../assets/Perera N.V.A.pdf';

const onPDFClick = () =>{
    fetch(ResumePDF).then((response)=>{
        response.blob().then((blob)=>{
            const fileURL=
                window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "ResumePDF";
            alink.click();
        })
    })
}

const Hero = () => {
    return (
        <section id ='home' className="section-hero">
        <div className="hero-content">
            <h1 className="title">Hello<br/>I am Vimukthi Aravinda</h1>
            <p className="description">I am a backend developer with 2 years of experience using <br/>SpringBoot, .Net and Oracle SQL </p>
            <div className="hero-actions" onClick={onPDFClick}>
                <div className="hero-resume">My resume</div>
            </div>
            <img className="hero-image" src={HeroImage} alt="vimukthi"/>
        </div>
        </section>
    );
};

export default Hero;