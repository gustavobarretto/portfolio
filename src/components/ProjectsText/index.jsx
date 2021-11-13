import './style.scss';
import imgCalc from '../../icons/img-project-calc.svg'
import imgCount from '../../icons/img-project-countdown.svg'

export const ProjectsText = () => {
    return (
        <>
            <div className="row">
                <div className="project-text">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={imgCalc} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Calculator in pure javascript</h5>
                            <a href="https://github.com/gustavobarretto/calculator-js-pure" className="btn btn-primary">Visit the project</a>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={imgCount} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Countdown in pure javascript</h5>
                            <a href="https://github.com/gustavobarretto/countdown-js-pure" className="btn btn-primary">Visit the project</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}