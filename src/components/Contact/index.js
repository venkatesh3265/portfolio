import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimationLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"]}
              idx={15}
            />
          </h1>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Contact;
