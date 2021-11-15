import './style.scss';

import bash from '../../icons/bash.svg'
import bootstrap from '../../icons/bootstrap.svg'
import git from '../../icons/git.svg'
import github from '../../icons/github-o_1.svg'
import java from '../../icons/java.svg'
import javascript from '../../icons/javascript.svg'
import nodejs from '../../icons/nodejs.svg'
import postgresql from '../../icons/postgresql.svg'
import python from '../../icons/python.svg'
import react from '../../icons/react.svg'
import robot from '../../icons/robot.svg'
import sass from '../../icons/sass.svg'
import s3 from '../../icons/s3.svg'
import spring from '../../icons/spring-framework-icon.svg'
import typescript from '../../icons/typescript.svg'
import vercel from '../../icons/vercel.svg'

export const Tools = () => {
    return (
        <>
            <div  id="tools" className="container-fluid tools">
                <div className="row tools-title">
                    <h1>Tools</h1>                
                </div>
                <div className="row tools-icons">
                    <img src={java} alt="Java" />
                    <img src={spring} alt="Springboot" />
                    <img src={javascript} alt="Javascript" />
                    <img src={typescript} alt="Typescript" />
                    <img src={python} alt="Python" />
                    <img src={nodejs} alt="NodeJS" />
                    <img src={react} alt="ReactJS" />
                    <img src={bootstrap} alt="Bootstrap" />
                    <img src={sass} alt="SaSS" />
                    <img src={git} alt="Git" />
                    <img src={github} alt="Github" />
                    <img src={s3} alt="AWS S3" />
                    <img src={postgresql} alt="PostegreSQL" />
                    <img src={robot} alt="Robot Framework" />
                    <img src={bash} alt="Bash" />
                    <img src={vercel} alt="Vercel" />
                </div>
            </div>
        </>
    )
}