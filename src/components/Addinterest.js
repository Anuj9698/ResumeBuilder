import React from 'react';
import Modal from 'react-modal';

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
        <button onClick={this.openModal}>Add Interest</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Skills</h2>

          <div>
            you can add a single interest or a multiple interest separated by
            comma ","
          </div>
          <form>
            <input type="text" onChange={this.handleChange} />
            <button onClick={this.closeModal}>close</button>
            <button onClick={this.handleFormSubmit}>Save Changes</button>
          </form>
        </Modal>
      </div>
    );
  }
}
