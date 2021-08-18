import React, { Component } from "react";
import { Modal } from "react-modal";
export default class Model extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: this.props.openModal,
    };
  }
  //   openModal = () => {
  //     this.setState({
  //       openModel: true,
  //     });
  //   };

  closeModal = () => {
    this.setState({
      IsOpen: false,
    });
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        <Modal
          isOpen={this.openModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}
