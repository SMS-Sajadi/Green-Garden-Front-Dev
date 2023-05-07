import React, { useState } from "react";
import Modal from "react-modal";
//images
import plant from '../../assets/images/3_2.svg'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: 'rgb(23 23 23 / 97%)',
    padding: '50px',
    borderRadius: '11px',
    width: '80vw',
    height: '55vh',
    maxHeight: '80vh',
    justifyContent: 'space-evenly'

  },
};

Modal.setAppElement("#root");

const SavePlants = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#198754";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="btn btn-icon  nav-icon"
        data-bs-target="#wishlist"
      >
        <i className="uil uil-heart align-middle icons"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p ref={(_subtitle) => (subtitle = _subtitle)} className="save-title" >گیاهان ذخیره‌شده شما</p>
        <div>

        </div>
      <div className="box2">
        <div className="item">
          <img src={plant} alt=""/>
          <p className="title">alaki</p>
        </div>
      </div>


        <button className="btn btn-primary mt-2 me-2" onClick={closeModal}>
          بستن
        </button>
      </Modal>
    </div>
  );
};

export default SavePlants;
