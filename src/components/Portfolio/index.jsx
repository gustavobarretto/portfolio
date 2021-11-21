import React from 'react';
import './style.scss';
import calculator from '../../img/icons/img-project-calc.svg';
import countdown from '../../img/icons/img-project-countdown.svg';

export const Portfolio = () => {
    const projectsList = () => {
        const projectConstructor = (projectId, projectTitle, projectImage, projectLink, projectCategory) => {
            return {
                id: projectId,
                title: projectTitle,
                image: projectImage,
                link: projectLink,
                category: projectCategory
            }
        }
        return [
            projectConstructor(1, 'Calculator in pure js', calculator, 'https://github.com/gustavobarretto/calculator-js-pure', 'Backend'),
            projectConstructor(2, 'Countdown in pure js', countdown, 'https://github.com/gustavobarretto/countdown-js-pure', 'Backend'),
            projectConstructor(4, 'To-do List in ReactJS', "https://user-images.githubusercontent.com/85125562/142744404-c25838d5-e16d-449b-b9c7-352ff049bb0f.png", 'https://github.com/gustavobarretto/to-do-list', 'Frontend & Backend')
        ]
    }

    return (
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                {projectsList().map(({id, title, image, link, category}) => {
                           return (
                            <React.Fragment key={id}>
                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href={link} title={title}>
                                        <img className="img-fluid thumbnails" src={image} alt="..."/>
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">{category}</div>
                                            <div className="project-name">{title}</div>
                                        </div>
                                    </a>
                                </div>
                                
                            </React.Fragment>    
                           )
                       })}
                </div>
            </div>
        </div>
    )
}