import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import MyProgress from "../MyProgress/MyProgress";
import "./Pricing.css";
import { Button } from "../Button/Button";

const imgs = ["images/power.png", "images/money.png", "images/secure.png"];

function Pricing({ headline, data, isPricing, height }) {
  // const desArr = [
  //   "• 100 percent unique Content",
  //   "•	Only top 5%  content creators are accepted",
  //   "•	Unlimited Revisions till you are satisfied",
  //   "•	Customizable Monthly Plans at your Request",
  //   "•	Change Monthly Subscription or Cancel Anytime",
  //   "•	100% money back Guarantee. No long story",
  // ];
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-wrapper">
          <h2 className="pricing-header">
            {window.innerWidth <= 960 ? "" : headline ?? "How it Works?"}
          </h2>
          <div className="pricing-card-container">
            {data.map((item) => (
              <div className="pricing_card_wrapper" key={item.key}>
                <div
                  className="pricing-card"
                  key={item.heading}
                  style={{ height: height }}
                >
                  <MyProgress
                    progress={item.progress}
                    stopColor1={item.stopColor1}
                    stopColor2={item.stopColor2}
                  />
                  {/* <img src={imgs[2]}className='img' alt=''/> */}
                  <div className="card-info">
                    <h3 className="pricing_heading2 ">{item.heading}</h3>
                    {isPricing === true ? (
                      item.desc.map((des) => (
                        <div className="guarantee_row" key={des}>
                          <HiOutlineBadgeCheck
                            className="g_icon"
                            style={{ color: "var(--red)" }}
                          />
                          <p style={{ alignContent: "center" }}>{des}</p>
                        </div>
                      ))
                    ) : (
                      <p className="pricing_description">{item.desc}</p>
                    )}
                  </div>
                </div>
                <Button
                  buttonStyle="btn--outline"
                  children="GET STARTED"
                ></Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="pricing-card">
              {/* <img src={imgs[0]}className='img' alt=''/> */}
      {/* <MyProgress
                progress={data[2].progress}
                stopColor1="red"
                stopColor2={data[2].heading.stopColor2}
              />
              <div className="card-info">
                <h3 className="pricing_heading2 ">{data[0].heading}</h3>
                {/* <p>{desc[0]}</p> */}
      {/* </div>  */}
      {/* </div> */}
      {/*<div className="pricing-card">
                    <img src={imgs[1]} className='img' alt=''/>
                        <h3  className='pricing_heading2 '>{heading[1]}</h3>
                        <div className="card-info">
                        <p>{desc[1]}</p>
                        </div>
                    </div> 
                    <div className="pricing-card">
                    <img src={imgs[2]}className='img' alt=''/>
                        <div className="card-info">
                        <h3  className='pricing_heading2 '>{heading[2]}</h3>
                        <p className='pricing_descpription'>{desc[2]}</p>
                        </div>
                    </div> */}
    </>
  );
}

export default Pricing;
