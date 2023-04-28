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
        <button
          style={{
            position: "fixed",
            bottom: "17px",
            left: "30px",
            transition: "all 0.5s ease",
          }}
          onClick={scrollUp}
          className="btn btn-icon btn-primary"
        >
            <h3>^</h3>     
        </button>
      )}
    </div>
  );
};

export default BackTop;
