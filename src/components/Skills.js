import React from 'react';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 3, 3, 3, 4, 4]
    };
  }

  render() {
    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px',
      marginBottom: '20px'
    };

    const skills = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      borderRadius: '5px',
      margin: '5px'
    };
    return (
      <div>
        <div>
          <h2>SKILLS AND COMPETENCIES</h2>
        </div>
        <div className="container" style={container}>
          {this.state.name.map((data, index) => (
            <div className="skills" style={skills}>
              CoreJava
            </div>
          ))}
        </div>
      </div>
    );
  }
}
