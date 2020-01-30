import React from 'react';

export default class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editvalue: null,
      workexp: []
    };
  }

  handleChange = event => {
    let index = event.target.getAttribute('data-key');
    let value = event.target.value;
    let name = event.target.name;
    alert(index);
    let newArr = {
      ...this.props.workexp[index],
      [name]: value
    };
    (async () => {
      await this.setState({ workexp: newArr });

      console.log(this.state.workexp);
    })();
  };

  editworkexp = event => {
    let index = event.target.getAttribute('data-key');
    alert(index);
    this.setState({ editvalue: index + '' });
  };

  deleteworkexp = event => {
    let index = event.target.getAttribute('data-key');
    this.props.workexp.splice(index, 1);
    localStorage.setItem('workexp', JSON.stringify(this.props.workexp));
  };

  saveworkexp = event => {
    // let index = event.target.getAttribute('data-key');
    // localStorage(
    //   'workexp',
    //   JSON.stringify((this.props.workexp[index] = this.state.workexp))
    // );
    // this.setState({ editvalue: false });
  };

  render() {
    const container = {
      padding: '10px'
    };
    const { editvalue } = this.state;
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
                  value={data.position}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  value={data.companyname}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  value={data.Start}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  value={data.end}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                <input
                  type="text"
                  value={data.place}
                  onChange={this.handleChange}
                  data-key={index}
                ></input>
                {data.values.map(data => (
                  <input
                    type="text"
                    value={data}
                    onChange={this.handleValues}
                    data-key={index}
                  ></input>
                ))}
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
            <button onClick={this.saveworkexp} key={index}>
              Save
            </button>
          </div>
        ))}
      </div>
    );
  }
}
