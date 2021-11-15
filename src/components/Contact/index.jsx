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
                    <a href="https://github.com/gustavobarretto"><img  src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/gustavo-barretto1/"><img src={linkedin} alt="" /></a>
                    <a href="mailto:gustavobarretto@gmail.com" ><img src={email} alt="" /></a>   
                </div>
            </div>
        </>
    )
}