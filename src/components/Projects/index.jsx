import './style.scss';
import {ProjectsText} from '../ProjectsText/index';

export const Projects = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h2 id="projects" className="projects-title">projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-3">
                        <ProjectsText />
                    </div>
                </div>
            </div>
        </>
    )
}