import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class='container'>
        <h1 class='h3'>Water Stewards Portal - Water Information Without Borders</h1>

        <p>
          <img src="img/map.png" />
        </p>

        <p>Note: Above image is only a mock-up for live data that will be sourced from
          <a href='https://data.water.vic.gov.au/' target='_blank'>data.water.vic.gov.au</a>.
          It will present surface and ground water quality with colored markers indicating quality level
          across the states that uplift environmental awareness in the region. The colors are a representation of
          the water quality and the trend in various locations of the water reserve. This presentation
          can offer insight to inform policies, development programs and research practices.
        </p>
      </div>
    );
  }
}
