import './style.scss';
import {AboutText} from '../AboutText/index';

export const About = () => {
    return (
        <>
            <div>
                <h2 id="about" className="about-title">about me</h2>
                <AboutText />
            </div>
        </>
    )
}