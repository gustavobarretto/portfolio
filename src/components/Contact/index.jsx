import './style.scss';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin.svg';
import email from '../../icons/email.svg';

export const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="contact-title">
                        <h2>contact me</h2>  
                    </div>
                    <div className="icons-contact">
                        <img src={github} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={email} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}