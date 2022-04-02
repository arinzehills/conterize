import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Button } from "../../components/Button/Button";
import "./Pricingpage.css";

function Pricingcontact() {
  const header = "Conterize Guaranteed Quality Assurance";

  return (
    <>
      <div className="pricing_section">
        <img src="./images/studio2.svg" alt="" className="cnt_img" />
        <div className="pricing_container">
          {/* <h1 style={{ textAlign: "center" }}>{header}</h1> */}
          <hr></hr>
          <div className="pricing_row">
            <img src="./images/studio3.svg" />
            <div className="prx_cnt_col">
              <h2 style={{ color: "var(--dark-blue)", paddingBottom: "2rem" }}>
                Need a Custom Plan?{" "}
              </h2>
              <Button buttonSize="btn--large" buttonColor="red">
                Speak to us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricingcontact;
