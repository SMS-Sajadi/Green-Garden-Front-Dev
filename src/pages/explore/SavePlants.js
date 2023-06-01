import React, { useState } from "react";
import Modal from "react-modal";
import { getData, get_by_token } from "../../services/api";
import { useCookies } from "react-cookie";
//images
import plant from "../../assets/images/3_2.svg";
import plant2 from "../../assets/images/plants/6_2.png";
// Component
import SaveCard from "../../components/SaveCard";
import { useEffect } from "react";

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
  const [cookies, setCookie] = useCookies(["token"]);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await get_by_token(
        "accounts/bookmark-plant/",
        cookies["token"]
      );

      setData(res);
    };

    fetch();
  }, []);

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
      <button onClick={openModal} className="btn btn-icon  nav-icon">
        <i className="uil uil-heart align-middle icons"></i>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        overlayStyle={{
          backgroundColor: "rgba(0, 1, 10, 0.5)",
          zIndex: 9999,
        }}
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
            {console.log(data)}
            {Array.isArray(data)  && data.map((item) => {
              return <SaveCard info={item} />;
            })}

                      <button
              className="btn btn-primary me-2"
              onClick={closeModal}
              style={{ marginTop: "50px" }}
            >
              بستن
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SavePlants;
