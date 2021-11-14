import './style.scss';
import profile from '../../icons/profile-pic.svg';

export const About = () => {
    return (
        <>
            <div className="container-fluid about">
                <div className="row profile-title">
                    <h1>About me</h1>
                </div>
                <div className="row profile-pic">
                    <img src={profile} alt="" />
                </div>
                <div className="row">
                    <p className="profile-text">
                        My name is Gustavo Barretto, I
                         am fullstack developer and I like
                          to code mostly in javascript, 
                          java and python. Almost of my
                           knowledge is in backend, but 
                           I can code in both areas. I 
                           mostly like games, movies and 
                           code's challenge.
                    </p>      
                </div>
                    <a className="button-resume btn btn-primary" href="#" role="button">Resume</a>
            </div>
        </>
    )
}