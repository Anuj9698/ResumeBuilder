import React from 'react';
import Modal from 'react-modal';

export default class Addworkexp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      workexp: []
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

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    let newArr = {
      ...this.state.workexp,
      [name]: value
    };

    this.setState({ workexp: newArr });
  };

  handleFormSubmit = () => {
    console.log('hello');
    const { workexp } = this.state;
    let w = this.props.workexp.concat(workexp);
    localStorage.setItem('workexp', JSON.stringify(w));
  };

  render() {
    const customStyles = {
      content: {
        top: '80%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '50%',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <div>
        <button onClick={this.openModal}>Add Work Experience</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>
            Add Work Experience
          </h2>

          <div>
            you can add a single interest or a multiple interest separated by
            comma ","
          </div>
          <form>
            <input
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="companyname"
              value={this.state.companyname}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="place"
              value={this.state.place}
              onChange={this.handleChange}
            />

            <button onClick={this.closeModal}>close</button>
            <button onClick={this.handleFormSubmit}>Save Changes</button>
          </form>
        </Modal>
      </div>
    );
  }
}
