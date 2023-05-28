import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../services/api";

// Components
import HeaderProfile from "../../components/profile/HeaderProfile";
import BusinessInfo from "../../components/profile/BusinessInfo";
import GardenScore from "../../components/profile/GardenScore";
import Product from "../../components/profile/Product";
import Comment from "../../components/comment/Comment";
import CommentShow from "../../components/comment/CommentShow";

// //image
// import garden from "../../assets/images/plants/14.jpg";
// import plant from "../../assets/images/plants/22.png";
// import parvaneh from "../../assets/images/temp/parvaneh.png";
// import pl2 from "../../assets/images/verifyBG.jpg";

const Garden = () => {
  const params = useParams();
  const  garden_id = params.garden_id;

  const [garden_info, setGarden_info] = useState({});



  useEffect(() => {
    getData(`/garden/${garden_id}/`)
    .then(data => setGarden_info(data))
    .catch(error => console.log(error));

}, [garden_id]);  

  const {
    is_garden_owner,
    name,
    image,
    address,
    business_code,
    admin_name,
    tolal_products,
    total_score,
    garden_comments,
    plants,
    phoene_number,
    business_license_image,
  } = garden_info;

  // const products = [
  //   {
  //     image: plant,
  //     name: "plant",
  //     category: "flow",
  //   },
  //   {
  //     image: pl2,
  //     name: "plant2",
  //     category: "flow",
  //   },
  //   {
  //     image: plant,
  //     name: "plant",
  //     category: "flow",
  //   },
  //   {
  //     image: pl2,
  //     name: "plant2",
  //     category: "flow",
  //   },
  //   {
  //     image: plant,
  //     name: "plant",
  //     category: "flow",
  //   },

  //   {
  //     image: plant,
  //     name: "plant",
  //     category: "flow",
  //   },
  // ];

  const [count, setCount] = useState(4);

  const handleShowMore = () => {
    setCount(count + 5);
  };

  const handleShowLess = () => {
    setCount(4);
  };

  return (
    <div>
      <HeaderProfile
        prof_info={{
          image: { image },
          name: { name },
          describe: "گلخانه",
          owner: is_garden_owner,
          link: "/home/garden/setting",
        }}
      />

      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            <GardenScore
              info={{
                score: { total_score },
                plants_number: { tolal_products },
              }}
            />
            <div className="col-lg-8 col-12">
              <div className="border-bottom pb-4">
                <div className="row">
                  <BusinessInfo
                    info={{
                      business_id: { business_code },
                      image: { business_license_image },
                      address: { address },
                      admin: { admin_name },
                      phone: { phoene_number },
                    }}
                  />

                  <h5 className="mt-4 mb-0">محصولات :</h5>
                  <div className="row">
                    {plants.slice(0, count).map((item, index) => {
                      return (
                        <Product
                          key={index}
                          info={{
                            image: item.main_plant_img,
                            name: item.name,
                            category: item.type,
                            plant_id: item.plant_id,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="col-12 mt-4 pt-2">
                    {count < plants.length && (
                      <div className="btn btn-primary" onClick={handleShowMore}>
                        نمایش بیشتر{" "}
                        <i className="uil uil-angle-left-b align-middle"></i>
                      </div>
                    )}
                    {count > 4 && (
                      <div className="btn btn-primary" onClick={handleShowLess}>
                        نمایش کمتر{" "}
                        <i className="uil uil-angle-left-b align-middle"></i>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {garden_comments.map((item) => {
              return (
                <CommentShow
                  comment_info={{
                    name: item.name,
                    comment_message: item.comment_message,
                    score: item.score,
                    date: item.date,
                    time: item.time
                  }}
                />
              );
            })}

            {!is_garden_owner && <Comment garden_id={garden_id} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garden;
