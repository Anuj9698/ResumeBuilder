import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const container = {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '10px'
    };

    const interest = {
      flex: '33%',
      padding: '0px'
    };

    const header = {
      padding: '30px'
    };

    return (
      <div className="header" style={header}>
        <div className="container" style={container}>
          <div style={interest}>
            <h1>Anuj Gupta</h1>
            <h2>Full Stack Developer </h2>
            <p>
              My sole objective is to work in a dynamic and professional
              organization, where I can utilize my creativity and technical
              skill for the benefit of the organization and myself and
              continuously update and upgrade my knowledge base.
            </p>
          </div>
          <div style={interest}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBErbWb67c056gQAwi-NyXzUKiMPCSzJhRyGzztyu_FZI0aAzZg&s"
              style={{ borderRadius: '150px' }}
              alt="no"
            ></img>
          </div>
          <div
            style={{
              flex: '33%',
              padding: '0px',
              justifyContent: 'flex-end',
              flexDirection: 'row-reverse'
            }}
          >
            <p> anuj9698@gmail.com</p>
            <p> 8745870729</p>
            <p> New Delhi</p>
            <p> anujlinkedin.com</p>
          </div>
        </div>
      </div>
    );
  }
}
