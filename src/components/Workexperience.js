import React from 'react';

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editvalue: null,
      workexp: [],
      updateworkexp: [],
      inputs: [],
      list: [],
      values: [],
      length: null
    };
  }

  appendInput = event => {
    event.preventDefault();
    var newInput = `${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  };

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    let newArr = {
      ...this.state.workexp,
      [name]: value
    };
    this.setState({ workexp: newArr });
  };

  handleChangePoints = event => {
    let index = event.target.getAttribute('data-key');
    this.state.list[index] = event.target.value;
    this.setState({ list: this.state.list });
    let newArr = {
      ...this.state.workexp,
      values: this.state.list
    };

    this.setState({ workexp: newArr });
    console.log(this.state.list);
  };

  editworkexp = event => {
    let index = event.target.getAttribute('data-key');
    this.setState({ length: this.props.workexp[index].values.length });
    this.setState({ list: this.props.workexp[index].values });
    this.setState({ workexp: this.props.workexp[index] });
    this.setState({ editvalue: index + '' });
  };

  deleteworkexp = event => {
    let index = event.target.getAttribute('data-key');
    this.props.workexp.splice(index, 1);
    localStorage.setItem('workexp', JSON.stringify(this.props.workexp));
  };

  saveworkexp = event => {
    let index = event.target.getAttribute('data-key');
    this.props.workexp.splice(index, 1);
    this.props.workexp.push(this.state.workexp);
    localStorage.setItem('workexp', JSON.stringify(this.props.workexp));
    this.setState({ editvalue: null });
  };

  render() {
    const container = {
      padding: '10px'
    };
    const { editvalue, workexp } = this.state;
    return (
      <div className="container" style={container}>
        <h2>Work Experience</h2>
        {this.props.workexp.map((data, index) => (
          <div>
            {editvalue == index ? (
              <div>
                <input
                  type="text"
                  name="position"
                  value={workexp.position}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  name="companyname"
                  value={workexp.companyname}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  name="Start"
                  value={workexp.Start}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  name="end"
                  value={workexp.end}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  name="place"
                  value={workexp.place}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                {workexp.values.map((data, id) => (
                  <input
                    type="text"
                    value={data}
                    onChange={this.handleChangePoints}
                    data-key={id}
                  ></input>
                ))}
                {this.state.inputs.map(id => (
                  <input
                    type="text"
                    name="value"
                    onChange={this.handleChangePoints}
                    data-key={parseInt(id + this.state.length)}
                  ></input>
                ))}
                <button onClick={this.appendInput} data-key={index}>
                  CLICK ME TO ADD AN INPUT
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <h3>{data.position}</h3>
                  <h4>{data.companyname}</h4>
                  <div>
                    {data.Start} to {data.end}
                    <div style={{ float: 'right' }}> {data.place}</div>
                  </div>
                </div>
                <div>
                  <ul>
                    {data.values.map((data, index) => (
                      <li key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <button onClick={this.editworkexp} data-key={index}>
              Edit
            </button>
            <button onClick={this.deleteworkexp} data-key={index}>
              delete
            </button>
            <button onClick={this.saveworkexp} data-key={index}>
              Save
            </button>
          </div>
        ))}
      </div>
    );
  }
}
