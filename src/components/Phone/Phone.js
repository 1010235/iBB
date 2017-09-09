import React, {PureComponent} from 'react';

import './style.css';
import './mobileStyle.css';
import './desktopStyle.css';

export default class Phone extends PureComponent{


    render(){
        return(
        <div>
            <div className="lightbox-blanket">
                <div className="pop-up-container">
                    <div className="pop-up-container-vertical">
                        <div className="pop-up-wrapper">
                            <div className="phone-wrapper">
                                <div className="phone-pad">
                                    <div className="phone-pad-input-panel">
                                        <div className="phone-pad-input-text">
                                            <div className="phone-bb-title">iBB</div>
                                            <input id="number-input" type="tel" readOnly="readonly" value={this.props.phoneNumberToSend}/>
                                            <div className="phone-btn">
                                                <i className="fa fa-square-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
