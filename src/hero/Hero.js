import React, { Component } from 'react';

    import './Hero.css';

    import travelHero1 from "../assets/images/travel-hero-1.jpg";
    import travelHero2 from "../assets/images/travel-hero-2.jpg";
    import travelHero3 from "../assets/images/travel-hero-3.jpg";
    import travelHero4 from "../assets/images/travel-hero-4.jpg";

    class Hero extends Component {
    render() {
        return (
        <div>

            <div className="jumbotron">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div id="img_carousel" className="item active">
                        <img src={travelHero1} alt="travel-hero-1"></img>
                        <div className="carousel-caption">
                            <h3>WELCOME TO MY TRAVEL SITE!</h3>
                        </div>
                    </div>
                    <div id="img_carousel" className="item">
                        <img src={travelHero2} alt="travel-hero-2"></img>
                        <div className="carousel-caption">
                            <h3>THERE ARE SO MANY INTERESTING PLACES TO GO!</h3>
                        </div>
                    </div>
                    <div id="img_carousel" className="item">
                        <img src={travelHero3} alt="travel-hero-3"></img>
                        <div className="carousel-caption">
                            <h3>AND SO MANY FUN THINGS TO DO!</h3>
                        </div>
                    </div>
                    <div id="img_carousel" className="item">
                        <img src={travelHero4} alt="travel-hero-4"></img>
                        <div className="carousel-caption">
                            <h3>WHERE DO YOU WANT TO GO?</h3>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>

        </div>
        );
    }
    }

    export default Hero;