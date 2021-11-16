import './style.scss';

export const Tools = () => {
    const iconList = {
        iconConstructor: iconConstructor = (iconId, iconName, iconFileName) => {
            return {
                id: iconId,
                name: iconName,
                path: '../../img/icons/' + iconFileName
            }
        },
        iconList: [
            iconConstructor(1, 'Javascript', 'javascript'),
            iconConstructor(2, 'ReactJS', 'react'),
            iconConstructor(3, 'Java', 'java'),
            iconConstructor(4, 'Spring', 'spring-logo'),
            iconConstructor(5, 'Python', 'python'),
            iconConstructor(6, 'Typescript', 'typescript'),
            iconConstructor(7, 'MySQL & PostgreSQL', 'potgresql'),
            iconConstructor(8, 'AWS S3', 's3'),
        ]
    }

    return (
        <>
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Main languages and frameworks</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><img src={iconList[0]['path']} alt="" /></div>
                            <h3 className="h4 mb-2">Javascript</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">ReactJS</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Java</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Spring</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Python</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">Typescript</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">MySQL & PostgreSQL</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2">AWS S3</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}