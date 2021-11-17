import './style.scss';
import email from '../../img/icons/email.svg';
import github from '../../img/icons/github-o_1.svg';
import linkedin from '../../img/icons/linkedin.svg';


export const Contact = () => {
    return (
        <>
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Contact me!</h2>
                        <hr class="divider" />
            </div>
            <div></div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><a href="https://www.linkedin.com/in/gustavo-barretto1/"><img className="img-fluid col-3" src={linkedin} alt="" /></a></div>
                            <h3 className="h4 mb-2">Linkedin</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><a href="https://github.com/gustavobarretto"><img className="img-fluid col-3" src={github} alt="" /></a></div>
                            <h3 className="h4 mb-2">Github</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><a href="mailto:gustavobarretto@gmail.com"><img className="img-fluid col-3" href="mailto:gustavobarretto@gmail.com" src={email} alt="" /></a></div>
                            <h3 className="h4 mb-2">Email</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}