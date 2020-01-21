import React from 'react';
import Modal from 'react-modal';

export default class Addlanguage extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      language: []
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
    let langinput = [];
    langinput = event.target.value.split(',');
    let newArr = this.props.language.concat(langinput);
    this.setState({ language: newArr });
  };

  handleFormSubmit = () => {
    console.log('hello');
    const { language } = this.state;
    localStorage.setItem('language', JSON.stringify(language));
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
        <button onClick={this.openModal}>Add Language</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Add languages</h2>

          <div>
            you can add a single language or a multiple language separated by
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
