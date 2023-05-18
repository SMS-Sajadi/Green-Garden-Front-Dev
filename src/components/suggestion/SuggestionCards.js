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
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4"> گیاه‌های مربوط </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                
                با <span class="text-primary fw-bold">گرین گاردن </span>گیاهان
                متناسب با شرایطت را پیدا کن.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div class="row">
          <div class="col-12 mt-4 pt-2">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item">
                <p
                  class={currentPage === 0 ? 'page-link disabled':'page-link'}
                  onClick={handleClickPrev}
                >
                  
                  قبلی
                </p>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li                   class={
                    currentPage === index ? "page-item active" : "page-item"
                  }>
                  <p
                    key={index}
                    onClick={() => handlePageClick(index)}
                    disabled={currentPage === index}
                    class={currentPage === index ? "page-link active" : "page-link"}
                  >
                    {index + 1}
                  </p>
                </li>
              ))}

              <li class="page-item">
                <p
                  onClick={handleClickNext}
                  class={endIndex >= items.length ? 'page-link disabled':'page-link'}

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
