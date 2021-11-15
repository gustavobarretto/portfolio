import './style.scss';
import icon from '../../icons/icon-header.svg';

export const Banner = () => {
    return (
        <div id="home" className="container-fluid banner">
            <div className="row banner-title">
                <h1>Front & Back</h1>
                <h1>Development</h1>
                <p>I'm Gustavo Barretto
                    and I'm a fullstack
                    developer.
                </p>
            </div>
        </div>
    )
}