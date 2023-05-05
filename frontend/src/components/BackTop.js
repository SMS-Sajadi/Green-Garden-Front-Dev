import React, { useEffect, useState } from "react";

const BackTop = () => {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="topfo">
      {backTop && (
        // <button
        //   style={{
        //     position: "fixed",
        //     bottom: "17px",
        //     left: "30px",
        //     transition: "all 0.5s ease",
        //   }}
        //   onClick={scrollUp}
        //   className="btn btn-icon btn-primary"
        // >
        //     <h3>^</h3>
        // </button>

        <button
          className="noselect"
          onClick={scrollUp}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackTop;
