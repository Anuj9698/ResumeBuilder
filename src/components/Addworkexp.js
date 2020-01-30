import React from 'react';
import Modal from 'react-modal';
import './modal.css';

export default class Addworkexp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      workexp: [],
      inputs: [],
      list: [],
      values: []
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  appendInput = event => {
    event.preventDefault();
    var newInput = `${this.state.inputs.length}`;
    this.setState(prevState => ({
      inputs: prevState.inputs.concat([newInput])
    }));
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    let newArr = {
      ...this.state.workexp,
      [name]: value
    };

    this.setState({ workexp: newArr });
  };

  handleChangePoints = (event, index) => {
    this.state.list[index] = event.target.value;
    this.setState({ list: this.state.list });
    let newArr = {
      ...this.state.workexp,
      values: this.state.list
    };

    this.setState({ workexp: newArr });
    console.log(this.state.list);
  };

  handleFormSubmit = () => {
    console.log('hello');
    console.log(this.state.workexp);
    const { workexp } = this.state;
    let w = this.props.workexp.concat(workexp);
    localStorage.setItem('workexp', JSON.stringify(w));
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add Work Experience</button>
        <Modal
          className="mod"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Add Work Experience
          </h2>

          <div>
            you can add a single interest or a multiple interest separated by
            comma ","
          </div>
          <form className="inputform">
            <input
              type="text"
              name="position"
              value={this.state.position}
              placeholder="Add Position in Company"
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="companyname"
              value={this.state.companyname}
              onChange={this.handleChange}
              placeholder="Add Company"
            />
            <br />
            <input
              type="text"
              name="Start"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="Start Date"
            />
            <br />
            <input
              type="text"
              name="end"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="End Date"
            />
            <br />
            <input
              type="text"
              name="place"
              value={this.state.place}
              onChange={this.handleChange}
              placeholder="Add Company Place"
            />
            <br />

            {this.state.inputs.map((data, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="value"
                  onChange={event => this.handleChangePoints(event, index)}
                  placeholder="Add details of your work"
                />
              </div>
            ))}
            <div className="mod-btn">
              <button onClick={this.appendInput}>
                CLICK ME TO ADD AN INPUT
              </button>

              <button onClick={this.handleFormSubmit}>Save Changes</button>
              <button onClick={this.closeModal}>close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
