import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './style.scss';

import full1 from '../../img/portfolio/fullsize/1.jpg';
import full2 from '../../img/portfolio/fullsize/2.jpg';
import full3 from '../../img/portfolio/fullsize/3.jpg';
import full4 from '../../img/portfolio/fullsize/4.jpg';
import full5 from '../../img/portfolio/fullsize/5.jpg';
import full6 from '../../img/portfolio/fullsize/6.jpg';

import thumb1 from '../../img/portfolio/thumbnails/1.jpg';
import thumb2 from '../../img/portfolio/thumbnails/2.jpg';
import thumb3 from '../../img/portfolio/thumbnails/3.jpg';
import thumb4 from '../../img/portfolio/thumbnails/4.jpg';
import thumb5 from '../../img/portfolio/thumbnails/5.jpg';
import thumb6 from '../../img/portfolio/thumbnails/6.jpg';


export const Portfolio = () => {
    return (
    
      <SRLWrapper>
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0"> 
                   <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={full1} title="Calculator in pure js">
                            <img className="img-fluid" src={thumb1} alt="..."/>
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Backend</div>
                                <div className="project-name">Calculator in pure js</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={full2} title="Countdown in pure js">
                            <img className="img-fluid" src={thumb2} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Backend</div>
                                <div className="project-name">Countdown in pure js</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href={full3} title="Project Name">
                            <img className="img-fluid" src={thumb3} alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </SRLWrapper>
    )
}