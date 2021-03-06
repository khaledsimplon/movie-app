import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './addmovie.css'
const Modall = (props) => {
  const {
    buttonLabel,
    className,
    addtitle,
    addrate,
    addmovieonclick,
    addstar,
    addpicture
  } = props;
  
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div class="modal-addmovie">
      <Button color="danger" onClick={toggle}>{buttonLabel}+</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <form action="/action_page.php">
  <label for="img">Select image:</label>
  <input type="text" id="add-picture" onChange={addpicture} placeholder="enter url"/>
  <input type="text" id="add-name" onChange={addtitle} placeholder="enter name"/>
  <input type="text" id="add-rate" onChange={addrate} placeholder="enter rate in number " /> 
  <input type="text" id="add-rate" onChange={addstar} placeholder="enter rate in stars " /> 
</form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle,addmovieonclick} >Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  
}

export default Modall;