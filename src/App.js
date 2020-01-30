import React from 'react';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Workexperience from './components/Workexperience';
import Languages from './components/Languages';
import Header from './components/Header';
import AddSkills from './components/AddSkills';
import Addinterest from './components/Addinterest';
import Addlanguage from './components/Addlanguages';
import Addworkexp from './components/Addworkexp';
import LoginForm from './components/Loginform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      interest: [],
      language: [],
      workexp: []
    };
  }

  componentDidMount() {
    let name = JSON.parse(localStorage.getItem('skills'));
    console.log(name);
    if (name !== null) {
      let arr = this.state.name.concat(name);
      this.setState({ name: arr });
    }

    let interest = JSON.parse(localStorage.getItem('interest'));
    console.log(interest);
    if (interest !== null) {
      let arrint = this.state.interest.concat(interest);
      this.setState({ interest: arrint });
    }

    let language = JSON.parse(localStorage.getItem('language'));
    console.log(language);
    if (language !== null) {
      let arrlan = this.state.language.concat(language);
      this.setState({ language: arrlan });
    }

    let workexp = JSON.parse(localStorage.getItem('workexp'));
    console.log(workexp);
    if (workexp !== null) {
      let arr = this.state.workexp.concat(workexp);
      this.setState({ workexp: arr });
    }
  }
  render() {
    const resume = {
      // backgroundColor: 'lightblue',
      display: 'flex',
      flexDirection: 'column',
      height: '800px',
      flexWrap: 'wrap',
      width: '50%'
    };

    const components = {};
    console.log('hi');
    return (
      <div>
        {/* <LoginForm /> */}
        <div>
          <AddSkills saveditem={this.state.name} />
          <Addinterest interest={this.state.interest} />
          <Addlanguage language={this.state.language} />
          <Addworkexp workexp={this.state.workexp} />
        </div>
        <div className="App" style={{ width: '60%', margin: 'auto' }}>
          <Header />
          <div className="resume-template" style={resume}>
            <Workexperience workexp={this.state.workexp} style={components} />
            <Skills skills={this.state.name} style={components} />
            <Interest interest={this.state.interest} style={components} />
            <Languages language={this.state.language} style={components} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
