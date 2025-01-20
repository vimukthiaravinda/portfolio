import 'react';
import './about.css';
import profile_image from '../../assets/profile_image.webp'
const About = () => {
    return (
        <div id = 'about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_image} alt="profile_image_vimukthi"/>
                </div>
                <div className='about-right'>
                    <div className='about-paragraph'>
                        <p>I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach to work and getting things done. I am determined and decisive. I identify and develop opportunities. </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>Java</p>
                            <hr style={{width: "45%"}}/>
                        </div>
                        <div className='about-skill'><p>C#</p>
                            <hr style={{width: "35%"}}/>
                        </div>
                        <div className='about-skill'><p>SQL</p>
                            <hr style={{width: "45%"}}/>
                        </div>
                        <div className='about-skill'><p>JavaScript</p>
                            <hr style={{width: "20%"}}/>
                        </div>
                        <div className='about-skill'><p>C++</p>
                            <hr style={{width: "10%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr/>
                <div className='about-achievement'>
                    <h1>2+</h1>
                    <p>COMPANIES</p>
                </div>
            </div>
        </div>
    );
};

export default About;