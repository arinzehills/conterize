import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

function Hero({
  subHeadline,
  headline,
  description,
  isCenter,
  showImg,
  img,
  imgStart,
  showButton,
  show2Button,
  buttonLabel,
}) {
  return (
    <>
      <div
        className="hero__section "
        style={{
          paddingLeft: isCenter !== true && "4rem",
          paddingRight: isCenter !== true && "4rem",
        }}
      >
        <div
          className={`hero__container
                   ${
                     isCenter === true
                       ? "hero__column"
                       : imgStart === "start"
                       ? "hero__row"
                       : "hero__row"
                   }
            `}
          style={{
            display: "flex",
            flexDirection:
              isCenter === true
                ? "column"
                : imgStart === "start"
                ? "row-reverse"
                : "row",
          }}
        >
          <div
            className="hero__text_wrapper "
            style={{ alignItems: isCenter === true && "center" }}
          >
            <div className="sub_headline">{subHeadline ?? "Conterize"}</div>
            <div className="hero__headline">
              <h1>{headline}</h1>
            </div>
            <p className="hero__subtitle">{description}</p>
            {showButton === true && (
              <Link to="/register">
                <Button buttonColor="red" buttonSize="btn--large">
                  {buttonLabel[0]}
                </Button>{" "}
              </Link>
            )}
            {show2Button === true && (
              <Link to="/register">
                <Button buttonSize="btn--large" buttonStyle="btn--outline">
                  {buttonLabel[1]}
                </Button>
              </Link>
            )}
          </div>
          <div className="hero__image">
            {/* <img src='../../images/studio.png' alt='hero image' className='home__hero-img' /> */}
            {showImg === true && (
              <img src={img} alt="hero image" className="home__hero-img" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
