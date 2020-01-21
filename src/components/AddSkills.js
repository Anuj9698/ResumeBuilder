import React from 'react';
import Modal from 'react-modal';

export default class Addskills extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      skills: {}
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
    event.preventDefault();
    let skillinput = [];
    skillinput = event.target.value.split(',');
    let newArr = this.props.saveditem.concat(skillinput);
    this.setState({ skills: newArr });
  };

  handleFormSubmit = () => {
    console.log('hello');
    const { skills } = this.state;
    localStorage.setItem('skills', JSON.stringify(skills));
  };

  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };
    return (
      <div>
        <button onClick={this.openModal}>Add Skill</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add Skills</h2>

          <div>
            you can add a single skill or a multiple skills separated by comma
            ","
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
