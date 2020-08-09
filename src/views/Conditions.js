import React, { Component } from 'react';

class Conditions extends Component {

  render() {
    return (
      <div className="conditions">
        <h1>Road Conditions</h1>
        <a href="http://www.dot.ca.gov/hq/roadinfo/sr4">Current Road Conditions for Highway 4 (Department of Transportation)</a>
        <h1>Weather Conditions</h1>
        <h2>Murphys</h2>
        <div className="powr-weather" id="dc68152b_1508395387"></div>
        <h2>Dorrington</h2>
        <div className="powr-weather" id="1e7bfe35_1508394966"></div>
        <h2>Bear Valley + Lake Alpine</h2>
        <div className="powr-weather" id="789974a1_1508395239"></div>
      </div>
    )
  }
}

export default Conditions;