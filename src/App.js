import React from 'react';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Workexperience from './components/Workexperience';
import Languages from './components/Languages';
import Header from './components/Header';

function App() {
  const resume = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px'
  };

  const components = {
    flex: '0 0 45%',
    padding: '20px'
  };
  return (
    <div className="App" style={{ width: '60%', margin: 'auto' }}>
      <Header />
      <div className="resume-template" style={resume}>
        <div class="resume-components" style={components}>
          <Workexperience />
        </div>
        <div class="resume-components" style={components}>
          <Skills />
          <Interest />
          <Languages />
        </div>
      </div>
    </div>
  );
}

export default App;
