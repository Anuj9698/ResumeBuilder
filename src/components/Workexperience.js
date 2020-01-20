import React from 'react';

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [1, 2, 3, 4, 4, 5, 5, 5]
    };
  }

  render() {
    const container = {
      padding: '10px'
    };
    return (
      <div className="container" style={container}>
        <div>
          <h2>Work Experience</h2>
          <h3>Full Stack Developer</h3>
          <h4>Story Digital</h4>
          <div>
            01/Jan/2019-01/jan/2020
            <div style={{ float: 'right' }}>New Delhi</div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Worked passionately in customer service in a high-volume
              restaurant.
            </li>
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

          <h3>Full Stack Developer</h3>
          <h4>Story Digital</h4>
          <div>
            01/Jan/2019-01/jan/2020
            <div style={{ float: 'right' }}>New Delhi</div>
          </div>
        </div>
        <div>
          <ul>
            <li>
              Worked passionately in customer service in a high-volume
              restaurant.
            </li>
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
    );
  }
}
