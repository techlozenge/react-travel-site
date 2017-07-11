import React, { Component } from 'react';
import './App.css';

import Navigation from './navigation/Navigation.js';
import Hero from './hero/Hero.js';
import Card from './cards/Card.js';
import TableRow from './tableRow/TableRow.js';
import Footer from './footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Navigation />

          <Hero />

          <div id="cards" className="page-row">
            <Card countryName="Spain" countryLink="http://www.spain.info/en_US/" countryId="spain" countryLiteral="Spain Tourism Site" />
            <Card countryName="Italy" countryLink="http://www.italia.it/en/home.html" countryId="italy" countryLiteral="Italy Tourism Site" />
            <Card countryName="Aruba" countryLink="http://www.arubatourism.com/" countryId="aruba" countryLiteral="Aruba Tourism Site" />
            <Card countryName="Chile" countryLink="http://chile.travel/en/" countryId="chile" countryLiteral="Chile Tourism Site" />
          </div>

          <hr className="style-eight" />

          <h3>Some information about the places I would like to visit</h3>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>Destination</th>
              <th>Capital</th>
              <th>Official Language</th>
              <th>Population (aprox.)</th>
              <th>National Bird</th>
            </tr>
            </thead>
            <tbody>
              <TableRow destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
              <TableRow destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />
              <TableRow destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
              <TableRow destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor" />
              </tbody>
          </table>

          <hr className="style-eight" />
          
          <Footer />
      </div>
    );
  }
}

export default App;
