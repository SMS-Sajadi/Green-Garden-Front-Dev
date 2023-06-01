import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData, get } from "../../services/api";

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
  const [garden_info, setGarden_info] = useState({});

  const params = useParams();
  const garden_id = params.gerden_id;

  useEffect(() => {
    const fetch = async () => {
      const data = await getData(`gardens/${garden_id}/`);
      setGarden_info(data);
    };

    fetch();
  }, [garden_id]);

  const {
    address,
    avg_score,
    business_code,
    // is_garden_owner,
    profile_photo,
    // admin_name,
    tolal_products,

    // garden_comments,
    plants,
    phoene_number,
    name,
    // business_license_image,
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
          image: profile_photo,
          name: garden_info.name,
          describe: "گلخانه",
          owner: false,
          link: "/home/garden/setting",
        }}
      />
      {console.log(garden_info.avg_score)}

      <section className="section mt-60">
        <div className="container mt-lg-3">
          <div className="row">
            {console.log(plants)}
            <GardenScore
              info={{
                score: avg_score,
                plants_number: Array.isArray(plants) ? plants.length : 0,
              }}
            />
            <div className="col-lg-8 col-12">
              <div className="border-bottom pb-4">
                <div className="row">
                  {/* <BusinessInfo
                    info={{
                      business_id: business_code ,
                      image: business_license_image ,
                      address: address ,
                      admin: admin_name ,
                      phone: phoene_number ,
                    }}
                  /> 
 */}
                  <h5 className="mt-4 mb-0">محصولات :</h5>
                  <div className="row">
                    {Array.isArray(plants) &&
                      plants.slice(0, count).map((item, index) => {
                        return (
                          <Product
                            key={index}
                            info={{
                              image: item.main_img,
                              name: item.name,
                              category: item.type,
                              plant_id: item.plant_id,
                            }}
                          />
                        );
                      })}
                  </div>

                  <div className="col-12 mt-4 pt-2">
                    {Array.isArray(plants) && count < plants.length && (
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

            {/* {garden_comments.map((item) => {
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

            {!is_garden_owner && <Comment garden_id={garden_id} />} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garden;
