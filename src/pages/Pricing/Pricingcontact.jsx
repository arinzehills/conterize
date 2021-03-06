import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./Pricingpage.css";

//this is the component with glash background
function Pricingcontact({ heading }) {
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
              <h2
                style={{
                  color: "var(--dark-blue)",
                  paddingBottom: "2rem",
                }}
              >
                {heading ?? "Need a Custom Plan?"}
              </h2>
              <div className="prx_ctn_btn_wrp">
                <Link to="/register">
                  <Button buttonSize="btn--large" buttonColor="red">
                    Get Started
                  </Button>
                </Link>
                {heading != null && (
                  <Link to="/contact">
                    <Button buttonSize="btn--large" buttonStyle="btn--outline">
                      Speak to us
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricingcontact;
