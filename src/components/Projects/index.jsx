import './style.scss';
import calc from '../../icons/img-project-calc.svg'
import count from '../../icons/img-project-countdown.svg'

export const Projects = () => {
    return (
        <>
            <div id="projects" className="containter-fluid projects">
                <div className="row projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="row projects-cards">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={calc} alt="Project"/>
                        <div className="card-body">
                            <h5 className="card-title">Calculator in pure javascript</h5>
                            <a href="#" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={count} alt="Project"/>
                        <div className="card-body">
                            <h5 className="card-title">Countdown in pure javascript</h5>
                            <a href="#" className="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}