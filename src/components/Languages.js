import React from 'react';

export default class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [1, 2, 5]
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
          <h2>Language Knowns</h2>
        </div>
        <div className="container" style={container}>
          {this.state.name.map((data, index) => (
            <div className="interest" style={interest}>
              <li>English</li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
