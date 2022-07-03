import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logov from "../../assets/images/letter-v.svg";
import AnimatedLetters from "../AnimationLetters";
import Logo from "../Home/Logo";
import "./index.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["e", "n", "k", "a", "t", "e", "s", "h"];
  console.log(nameArray);
  const jobArray = [
    "f",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className=" container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>

            <img src={Logov} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={24}
            />
          </h1>
          <Link to="/Contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
