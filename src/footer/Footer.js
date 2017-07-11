import React, { Component } from 'react';

    import './Footer.css';

    import travelIcon from "../assets/images/react-icon.png";

    class Footer extends Component {
     render() {
        return (
            <div id="footer">&copy; My Travel Site - Travel is fun!
                <div>
                    <label>Built with React &nbsp;
                        <img src={travelIcon} width="45px" height="45px" alt="react icon"></img>
                    </label>
                     &nbsp;/&nbsp;
                    <a href="https://facebook.github.io/react/">Facebook Github IO</a>
                    &nbsp;/&nbsp;
                </div>
            </div>
        );
    }
    }

export default Footer;