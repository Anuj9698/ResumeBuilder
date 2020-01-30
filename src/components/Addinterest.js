import React from 'react';
import Modal from 'react-modal';
import './modal.css';

export default class Adddetails extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      interest: []
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
    console.log(this.props);
    event.preventDefault();
    let interestinput = [];
    interestinput = event.target.value.split(',');
    let newArr = this.props.interest.concat(interestinput);
    this.setState({ interest: newArr });
  };

  handleFormSubmit = () => {
    console.log('hello');
    const { interest } = this.state;
    localStorage.setItem('interest', JSON.stringify(interest));
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Add Interest</button>
        <Modal
          className="mod"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Skills</h2>

          <div>
            you can add a single interest or a multiple interest separated by
            comma ","
          </div>
          <form className="inputform">
            <input type="text" onChange={this.handleChange} />
            <div className="mod-btn">
              <button onClick={this.handleFormSubmit}>Save Changes</button>
              <button onClick={this.closeModal}>close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
