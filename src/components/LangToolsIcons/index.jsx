import './style.scss';
import bash from '../../icons/bash.svg';
import bootstrap from '../../icons/bootstrap.svg';
import git from '../../icons/git.svg';
import github from '../../icons/github.svg';
import java from '../../icons/java.svg';
import javascript from '../../icons/javascript.svg';
import nodejs from '../../icons/nodejs.svg';
import postgresql from '../../icons/postgresql.svg';
import python from '../../icons/python.svg';
import react from '../../icons/react.svg';
import s3 from '../../icons/s3.svg';
import sass from '../../icons/sass.svg';
import spring from '../../icons/spring-framework-icon.svg';
import typescript from '../../icons/typescript.svg';
import vercel from '../../icons/vercel.svg';

export const LangToolsIcons = () => {
    return (
        <>
            <div className="tools">
                <div className="lang-tools-icons">
                    <img src={python} alt="" />
                    <img src={java} alt="" />
                    <img src={spring} alt="" />
                    <img src={javascript} alt="" />
                    <img src={typescript} alt="" />
                    <img src={nodejs} alt="" />
                    <img src={bootstrap} alt="" />
                    <img src={sass} alt="" />
                    <img className="react-icon" src={react} alt="" />
                    <img src={postgresql} alt="" />
                    <img src={s3} alt="" />
                    <img src={bash} alt="" />
                    <img src={git} alt="" />
                    <img src={github} alt="" />
                    <img src={vercel} alt="" />
                </div>
            </div>
        </>
    )
}