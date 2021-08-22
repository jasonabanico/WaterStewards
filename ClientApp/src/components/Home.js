import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <React.Fragment>
        <div class='container'>
          <p>
            <img src="img/map.png" />
          </p>

          <p>
            <b>Water Quality:</b> &nbsp;
            <span class="badge" style={{ backgroundColor: 'orange', color: 'white' }}>Good</span> &nbsp;
            <span class="badge" style={{ backgroundColor: 'purple', color: 'white' }}>Average</span> &nbsp;
            <span class="badge" style={{ backgroundColor: 'black', color: 'white' }}>Bad</span>
          </p>

          <p>Note: Above image is only a mock-up for live data that will be sourced from &nbsp;
            <a href='https://data.water.vic.gov.au/' target='_blank'>data.water.vic.gov.au</a>.
            It will present surface and ground water quality with colored markers indicating quality level
            across the states that uplift environmental awareness in the region. The colors are a representation of
            the water quality and the trend in various locations of the water reserve. This presentation
            can offer insight to inform policies, development programs and research practices.
          </p>
        </div >
      </React.Fragment>
    );
  }
}
