import './style.scss';
import {AboutText} from '../AboutText/index';

export const About = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h2 id="about" className="about-title">about me</h2>
                </div>
            </div>
            <div className="row">
                <div className="offset-3">
                    <AboutText />                
                </div>
            </div>
        </div>
        </>
    )
}