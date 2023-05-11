import React, { useState } from "react";
import Modal from "react-modal";
//images
import plant from "../../assets/images/3_2.svg";
import plant2 from "../../assets/images/plants/6_2.png";
// Component
import SaveCard from "../../components/SaveCard";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: '-50%',
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgb(23 23 23 / 97%)",
    padding: "50px",
    borderRadius: "11px",
    width: "80vw",
    height: "80vh",
    justifyContent: "space-evenly",
  },
};

Modal.setAppElement("#root");

const SavePlants = () => {
  const info = {
    image: plant,
    name: "plant",
    category: "roze",
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
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
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container mt-100 mt-60 save-div" id="portfolio">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4 text-primary fw-bold">
                  گیاهان ذخیره‌شده
                </h4>
              </div>
            </div>
          </div>

          <div className="row">
            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />

            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />
            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />
            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />

            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />

            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />

            <SaveCard info={info} />
            <SaveCard info={{ image: plant2, name: "nowo", category: "2m" }} />
            <button
              className="btn btn-primary me-2"
              onClick={closeModal}
              style={{ marginTop: "50px" }}
            >
              بستن
            </button>
          </div>
        </div>

        {/* <div className="row">
  <div className="col-12 mt-4 pt-2">
    <a
      href="page-portfolio-modern.html"
      className="btn btn-outline-primary"
    >
      نمایش بیشتر <i className="uil uil-angle-left-b"></i>
    </a>
  </div>
</div> */}
      </Modal>
    </div>
  );
};

export default SavePlants;
