import React from 'react';

export default class Interest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteInterest = event => {
    let index = event.target.getAttribute('data-key');
    this.props.interest.splice(index, 1);
    localStorage.setItem('interest', JSON.stringify(this.props.interest));
  };

  render() {
    console.log(this.props);
    const container = {
      display: 'flex',
      flexWrap: 'wrap'
    };

    const interest = {
      flex: ' 0 0 50%',
      padding: '10px'
    };

    return (
      <div>
        <div>
          <h2>INTERESTS</h2>
        </div>
        <div className="container" style={container}>
          {this.props.interest &&
            this.props.interest.map((data, index) => (
              <div className="interest" style={interest} key={index}>
                <li>
                  {data}
                  <button onClick={this.deleteInterest} data-key={index}>
                    x
                  </button>
                </li>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
