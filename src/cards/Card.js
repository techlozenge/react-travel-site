import React, { Component } from 'react';

    import './Card.css';

    class Card extends Component {
    render() {
        return (
             <div className="card" id={this.props.countryId}>
               <h3>{this.props.countryName}</h3>
                <a href={this.props.countryLink} target="_blank"> {this.props.countryLiteral}</a>
            </div>
        );
    }
    }

export default Card;