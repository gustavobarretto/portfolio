import './style.scss';
import profile from '../../img/icons/profile-pic.svg'

export const About = () => {
    return (
        <>
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">About me</h2>
                        <hr className="divider divider-light" />
                        <img className="img-fluid col-6" src={profile} alt="" />
                        <p className="text-white-75 mb-4">I like coding challenges, teamwork and team coding.
                         My hobbies are reading all kinds of books, watching all kinds of movies, playing games
                         and challenging myself with new projects. 
                         I love studying codes and languages. 
                         If you want to know more about my work, just click here below.</p>
                        <a className="btn btn-light btn-xl" href="#services">My main languages</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}