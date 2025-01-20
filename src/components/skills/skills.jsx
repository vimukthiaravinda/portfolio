import 'react';
import './skills.css';
import data from '../../assets/skills_data.json';
const Skills = () => {
    return (
        <div id = 'skills' className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skills-container">
                {data.map((skills_data,index) =>
                     <div key={index} className="skills-format">
                        <h3>{skills_data.skill_no}</h3>
                        <h2>{skills_data.skill_name}</h2>
                        <p>{skills_data.skill_type}</p>
                        <p>{skills_data.skill_description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;