import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimationLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  const refform = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    debugger;
    emailjs
      .sendForm(
        "service_uwmsgae",
        "template_kx5awhg",
        refform.current,
        "t4-n4DRa3skPP4qz9"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          // window.location.reload(false);
          console.log(refform.current);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

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
          <p> Feel free to contact</p>
          <div className="contact-form">
            <form ref={refform} onSubmit={sendEmail}>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  id="thename"
                  placeholder="Name"
                  required
                />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li className="padding-top20">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Messege"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />{" "}
              </li>
            </form>
          </div>
        </div>
        <div className="info-map">
          Venkatesh,
          <br />
          India
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.056502, 80.221913]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.056502, 80.221913]}>
              <Popup> come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Contact;
