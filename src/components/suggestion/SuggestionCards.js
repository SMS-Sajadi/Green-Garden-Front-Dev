import React, { useState } from "react";
// Component
import Card from "./Card";

// Images
import p1 from "../../assets/images/plants/14.jpg";
import p2 from "../../assets/images/plants/aloe vear.jpg";
import p3 from "../../assets/images/plants/fanj-J3-Pofva-_w-unsplash.jpg";
import p4 from "../../assets/images/plants/henry-co-FObU8l6PyLA-unsplash.jpg";

const itemsPerPage = 4;

const SuggestionCards = () => {
  const items = [
    { image: p1, id: 1, name: "first", category: "flowers" },
    { image: p1, id: 2, name: "first", category: "flowers" },
    { image: p1, id: 3, name: "first", category: "flowers" },
    { image: p1, id: 4, name: "first", category: "flowers" },
    { image: p1, id: 5, name: "first", category: "flowers" },
    { image: p2, id: 6, name: "first", category: "flowers" },
    { image: p1, id: 7, name: "first", category: "flowers" },
    { image: p4, id: 8, name: "first", category: "flowers" },
    { image: p3, id: 9, name: "first", category: "flowers" },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleClickPrev = () => {

    setCurrentPage((prevPage) => prevPage - 1);
    
  };

  const handleClickNext = () => {

    setCurrentPage((prevPage) => prevPage + 1);
    
  };

  const handlePageClick = (pageIndex) => {

    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title mb-4 pb-2">
              <h4 className="title mb-4"> گیاه‌های مربوط </h4>
              <p className="text-muted para-desc mb-0 mx-auto">
                
                با <span className="text-primary fw-bold">گرین گاردن </span>گیاهان
                متناسب با شرایطت را پیدا کن.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div className="row">
          <div className="col-12 mt-4 pt-2">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item">
                <p
                  className={currentPage === 0 ? 'page-link disabled':'page-link'}
                  onClick={handleClickPrev}
                >
                  قبلی
                </p>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li  key={index} className={
                    currentPage === index ? "page-item active" : "page-item"
                  }>
                  <p
                    key={index*2 - 3}
                    onClick={() => handlePageClick(index)}
                    disabled={currentPage === index}
                    className={currentPage === index ? "page-link active" : "page-link"}
                  >
                    {index + 1}
                  </p>
                </li>
              ))}

              <li className="page-item">
                <p
                  onClick={handleClickNext}
                  className={endIndex >= items.length ? 'page-link disabled':'page-link'}

                >
                  بعدی
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestionCards;
