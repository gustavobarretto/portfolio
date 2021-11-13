import './style.scss';
import { LangToolsIcons } from '../LangToolsIcons/index'

export const LangTools = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <h2 id="tools" className="tools-title">tools</h2>
                </div>
                <LangToolsIcons />
            </div>
        </>
    )
}