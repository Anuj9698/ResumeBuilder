import React from 'react';

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addpoints: true,
      point: ''
    };
  }

  addpoints = () => {
    this.setState({
      addpoints: true
    });
    console.log(this.state.addpoints);
  };

  handleChange = event => {
    this.setState({
      point: event.target.value
    });
  };

  render() {
    console.log(this.props.workexp + 'hello');
    const container = {
      padding: '10px'
    };
    return (
      <div className="container" style={container}>
        {this.props.workexp.map((data, index) => (
          <div>
            <div>
              <h2>Work Experience</h2>

              <h3>{data.position}</h3>
              <h4>jkp</h4>
              <div>
                cfghjk
                <div style={{ float: 'right' }}>hjkl</div>
              </div>
            </div>
            <div>
              <ul>
                <li>{data.value}</li>
                <li>Completed the F.A.S.T. customer service training class.</li>
                <li>
                  Maintained a high tip average thanks to consistent customer
                  satisfaction.
                </li>
                <li>
                  Worked passionately in customer service in a high-volume
                  restaurant.
                </li>
                <li>Completed the F.A.S.T. customer service training class.</li>
                <li>
                  Maintained a high tip average thanks to consistent customer
                  satisfaction.
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
