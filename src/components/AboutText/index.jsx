import './style.scss';
import profile from '../../icons/profile-pic.svg'

export const AboutText = () => {
    return (
        <>
            <div className="offset-2 about-text-component">
                <div className="row about-me-text">
                    <img className="about-me-picture"src={profile} alt=""></img>
                    <p>My name is Gustavo Barretto and
                        I am fullstack developer and I like
                        to code mostly in javascript and python. Almost
                        of my knowledge is in backend, but I can code in
                        both areas. I mostly like games, movies and code's
                        challenge.                  
                    </p>
                </div>
            </div>
        </>
    )
}