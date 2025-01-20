import 'react';
import './mywork.css'
import mywork_data from '../../assets/work_data.json';
const Mywork = () => {
    return (
        <div id = 'projects' className="mywork">
            <div className="mywork-title">
                <h1>My Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) =>
                    <div key={index}  className="work">
                        <h3>{work.work_name}</h3>
                        <img src={work.work_image} alt=""/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Mywork;