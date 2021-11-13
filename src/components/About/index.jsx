import './style.scss';
import {AboutText} from '../AboutText/index';

export const About = () => {
    return (
        <>
        <div className="container about-component">
            <div className="row about-row">
                <h2 id="about" className="about-title">about me</h2>
            </div>
            <div className="row about-text-row">
                {/* <div className="offset-3"> */}
                    <AboutText />                
                {/* </div> */}
            </div>
        </div>
        </>
    )
}