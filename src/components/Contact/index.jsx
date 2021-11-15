import './style.scss';
import github from '../../icons/github-o_1.svg';
import linkedin from '../../icons/linkedin.svg';
import email from '../../icons/email.svg';

export const Contact = () => {
    return (
        <>
            <div id="contact" className="container-fluid contact">
                <div className="row contact-title">
                    <h1>Contact me</h1>
                </div>
                <div className="row contact-icons">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={email} alt="" />
                </div>
            </div>
        </>
    )
}