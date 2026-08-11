import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleButton = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleButton);

    return () => {
      window.removeEventListener("scroll", toggleButton);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;