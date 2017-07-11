import React, { Component } from 'react';

    import './Footer.css';

    class Footer extends Component {
     render() {
        return (
            <div id="footer">&copy; My Travel Site - Travel is fun!
                <div>
                    <a href="http://facebook.com">Facebook</a>
                    &nbsp;/&nbsp;
                    <a href="http://twitter.com">Twitter</a>
                </div>
            </div>
        );
    }
    }

export default Footer;