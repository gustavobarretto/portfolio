import './style.scss';

export const About = () => {
    return (
        <>
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">About me</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">I'm a 30y old developer. I like to code's challenge, teamwork and team coding. 
                        My  hobbies are read all type of books, watch movies, playing games and make new projects applications. 
                        I love to study code and languages. If you want to know more about my work, just click here below.</p>
                        <a className="btn btn-light btn-xl" href="#services">Tools and Frameworks</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}