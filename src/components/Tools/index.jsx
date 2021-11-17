import './style.scss';
import javascript from '../../img/icons/javascript.svg'
import react from '../../img/icons/react.svg'
import java from '../../img/icons/java.svg'
import spring from '../../img/icons/spring-framework-icon.svg'
import python from '../../img/icons/python.svg'
import typescript from '../../img/icons/typescript.svg'
import postegresql from '../../img/icons/postgresql.svg'
import s3 from '../../img/icons/s3.svg'


export const Tools = () => {
    return (
        <>
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Main languages and projects</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={javascript} alt="" /></div>
                            <h3 className="h4 mb-2">Javascript</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={react} alt="" /></div>
                            <h3 className="h4 mb-2">ReactJS</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={java} alt="" /></div>
                            <h3 className="h4 mb-2">Java</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={spring} alt="" /></div>
                            <h3 className="h4 mb-2">Spring</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={python} alt="" /></div>
                            <h3 className="h4 mb-2">Python</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={typescript} alt="" /></div>
                            <h3 className="h4 mb-2">Typescript</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={postegresql} alt="" /></div>
                            <h3 className="h4 mb-2">MySQL & PostgreSQL</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img className="img-fluid col-3" src={s3} alt="" /></div>
                            <h3 className="h4 mb-2">AWS S3</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}