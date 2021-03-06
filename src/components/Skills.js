import React from 'react';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteSkills = event => {
    let index = event.target.getAttribute('data-key');
    this.props.skills.splice(index, 1);
    localStorage.setItem('skills', JSON.stringify(this.props.skills));
  };

  render() {
    console.log(this.props);
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
          {this.props.skills &&
            this.props.skills.map((data, index) => (
              <div className="skills" key={index} style={skills}>
                {data}
                <button onClick={this.deleteSkills} data-key={index}>
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
