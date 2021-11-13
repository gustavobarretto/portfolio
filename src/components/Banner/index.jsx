import './style.scss';
import { NavPortfolio } from '../NavPortfolio/index';

export const Banner = () => {
    return (
        <>
            <div className="container banner-component">
                    <h1>Gustavo Barretto</h1> 
                    <h2>Fullstacker Developer</h2> 
                    <NavPortfolio />
            </div>
        </>
    )
}