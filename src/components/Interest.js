import React from 'react';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [1, 2, 3, 4, 4, 5, 5, 5]
    };
  }

  render() {
    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px'
    };

    const interest = {
      flex: ' 0 0 40%',
      padding: '10px'
    };

    return (
      <div>
        <div>
          <h2>INTERESTS</h2>
        </div>
        <div className="container" style={container}>
          {this.state.name.map((data, index) => (
            <div className="interest" style={interest}>
              <li>playing cricket</li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
