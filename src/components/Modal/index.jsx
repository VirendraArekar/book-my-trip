
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function index(props) {
  const [modal, setModal] = useState(false);
  const {open, setOpen, className = '', size = "md"} = props;

  const toggle = () => setOpen(!open);

  return (
    <div className=''>
      <Modal isOpen={open} toggle={toggle} size={size} className={className}>
      <span className='position-absolute close-btn' onClick={toggle}>
              <IoIosCloseCircleOutline size={30}/>
            </span>
        <ModalBody className='m-0 p-0'>
            
          {props.children}
        </ModalBody>
      </Modal>
    </div>
  );
}

