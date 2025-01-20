import 'react';
import './mywork.css'
import portfolio from "../../assets/portfolio.png";
import Cimel from "../../assets/cimel.png";
import Xess from "../../assets/xess.png";
import Leapy from "../../assets/leapy.png";

const Mywork = () => {
    const mywork_data = [
        {
            work_no: "1",
            work_name: "Portfolio",
            work_image: portfolio
        },
        {
            work_no: "2",
            work_name: "Cimel Engineering",
            work_image: Cimel
        },
        {
            work_no: "3",
            work_name: "Xess Global",
            work_image: Xess
        },
        {
            work_no: "4",
            work_name: "Leapy",
            work_image: Leapy
        }
    ]
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