import React from 'react';

export default class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const container = {
      display: 'flex',
      flexWrap: 'wrap'
    };

    const language = {
      flex: ' 0 0 50%',
      padding: '10px'
    };

    return (
      <div>
        <div>
          <h2>Language Knowns</h2>
        </div>
        <div className="container" style={container}>
          {this.props.language &&
            this.props.language.map((data, index) => (
              <div className="interest" style={language} key={index}>
                <li>{data}</li>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
