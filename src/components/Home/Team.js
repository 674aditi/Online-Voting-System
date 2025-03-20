import "./CSS/team.css";
import { useEffect, React, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { SocialIcon } from "react-social-icons";
import image1 from "./CSS/mem1.jpg";
import image2 from "./CSS/mem2.jpg";

const Team = () => {
  const revealRefBottom = useRef(null);
  const revealRefLeft = useRef(null);
  const revealRefTop = useRef(null);
  const revealRefRight = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(revealRefBottom.current, {
      duration: 1000,
      delay: 200,
      distance: "50px",
      origin: "bottom",
      easing: "ease",
      reset: "true",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(revealRefRight.current, {
      duration: 1000,
      delay: 200,
      distance: "50px",
      origin: "right",
      easing: "ease",
      reset: "true",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(revealRefLeft.current, {
      duration: 1000,
      delay: 200,
      distance: "50px",
      origin: "left",
      easing: "ease",
      reset: "true",
    });
  }, []);
  useEffect(() => {
    ScrollReveal().reveal(revealRefTop.current, {
      duration: 1000,
      delay: 200,
      distance: "50px",
      origin: "top",
      easing: "ease",
      reset: "true",
    });
  }, []);
  return (
    <div className="Team">
      <h2 ref={revealRefTop}> Our Team</h2>
      <div className="Team-Content">
        <div className="Team-Content-Card" ref={revealRefLeft}>
          <img src={image2} className="image"></img>
          <h3>
            Aditi Kumari | <span>MERN Stack Developer</span>
          </h3>
          <p>
            I am a final-year B.Tech student at Jalpaiguri Government
            Engineering College, eager to grow in web development.
            Detail-oriented, open to feedback, and committed to improving
            technical skills. Excited to collaborate with experienced teams and
            contribute to impactful projects{" "}
          </p>
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://www.linkedin.com/in/aditi-kumari-45b957227/"
            target="_blank"
            url="www.linkedin.com"
          />
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://github.com/674aditi"
            target="_blank"
            url="www.github.com"
          />
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://www.instagram.com/aditi__674//"
            target="_blank"
            url="www.instagram.com"
          />
        </div>

        <div className="Team-Content-Card" ref={revealRefRight}>
          <img src={image1} className="image"></img>
          <h3>
            Nilanjan Ghosh | <span>MERN Stack Developer</span>
          </h3>
          <p>
            I am pursuing my final year in B.Tech from Jalpaiguri Government
            Engineering College. Eager to learn and grow in web development.
            Pays close attention to details, actively seeks feedback, and
            committed to improve technical skills. Ready to work with
            experienced teams and contribute to important projects.
          </p>
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://www.linkedin.com/in/nilanjan-ghosh-60557322b/"
            target="_blank"
            url="www.linkedin.com"
          />
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://github.com/Nilanjan2003"
            target="_blank"
            url="www.github.com"
          />
          <SocialIcon
            className="SocialIcon"
            style={{ height: "30px", width: "30px" }}
            href="https://www.instagram.com/im.nil_13/"
            target="_blank"
            url="www.instagram.com"
          />
        </div>
      </div>
    </div>
  );
};
export default Team;
