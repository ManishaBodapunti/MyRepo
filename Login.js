import React, { Component }  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Container } from 'reactstrap';

class Login extends Component {
   constructor(props) {
    super(props);
    
    this.state = {
      dd1: false,
      modal1: true,
      modal2: false
    };
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  
  dropdownToggle() {
    this.setState({
      dd1: !this.state.dd1
    });
  }
  closeModal(tabId) {
    this.setState({
      [tabId]: false
    });
  }
  showModal(modal) {
    this.setState({
      [modal]: true
    });
    console.log(this.state);
  }
  
  render() {
    return (      
      <div>
        <h1>Demo</h1>
        Modal On top of Modal
        <Button onClick={this.showModal.bind(this, 'modal1')}>
          Show Modal 1
        </Button>
          
        <hr/>
        <Container>
         <Modal isOpen={this.state.modal1} toggle={this.closeModal.bind(this, 'modal1')}>
           <ModalHeader toggle={this.closeModal.bind(this, 'modal1')}>
            Modal 1
           </ModalHeader>
           <ModalBody>
             <Button onClick={this.showModal.bind(this, 'modal2')}>
               Show Modal 2
             </Button>
           </ModalBody>
        </Modal>
        <Modal isOpen={this.state.modal2} toggle={this.closeModal.bind(this, 'modal2')}>
           <ModalHeader toggle={this.closeModal.bind(this, 'modal2')}>
            Modal 1
           </ModalHeader>
           <ModalBody>
             This is Modal 2
           </ModalBody>
        </Modal>
        </Container>
      </div>
    );
  }
}

export default Login;