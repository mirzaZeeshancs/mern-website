import React from 'react';
import '../../stylesheets/expertise.scss';
import { withRouter } from 'react-router-dom'

function Expertise(props){
    return(
        <div className="meta-container">
            <div className="meta-column-container">
            <div className="meta-column">
                <div className="meta">
                <strong>Expertise</strong>
                </div>
                <div className="meta-light">Design and interaction</div>
            </div>
            <div className="meta-column">
                <div className="meta">
                <strong>Platforms</strong>
                </div>
                <div className="meta-light">Web application</div>
            </div>
            </div>
            <div className="meta-column-container">
            <div className="meta-column">
                <div className="meta">
                <strong>Deliverables</strong>
                </div>
                <div className="meta-light">
                UI, UX, strategy, flow and concept
                </div>
            </div>
            <div className="meta-column">
                <div className="meta">
                <strong>{props.location.pathname.includes('eventray')?'Launch Product': 'Interested?'}</strong>
                </div>
                <div className="meta-light">{props.location.pathname.includes('eventray') ? <a href='https://eventray.com' target='_blank'>eventray.com</a> : <a href="mailto:contact@techclan.co" target='_blank'>contact@techclan.co</a>}</div>
            </div>
            </div>
        </div>
    );
}
export default withRouter(Expertise);