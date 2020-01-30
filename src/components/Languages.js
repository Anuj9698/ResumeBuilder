import React from 'react';

export default class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteLanguage = event => {
    let index = event.target.getAttribute('data-key');
    this.props.language.splice(index, 1);
    localStorage.setItem('language', JSON.stringify(this.props.language));
  };

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
                <li>
                  {data}
                  <button onClick={this.deleteLanguage} data-key={index}>
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
