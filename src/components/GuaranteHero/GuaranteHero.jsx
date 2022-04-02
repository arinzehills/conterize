import React from "react";
import "./GuaranteHero.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
function GuaranteHero() {
  const header = "Conterize Guaranteed Quality Assurance";
  const desArr = [
    "• 100 percent unique Content",
    "•	Only top 5%  content creators are accepted",
    "•	Unlimited Revisions till you are satisfied",
    "•	Customizable Monthly Plans at your Request",
    "•	Change Monthly Subscription or Cancel Anytime",
    "•	100% money back Guarantee. No long story",
  ];
  return (
    <>
      <div className="guarantee_section">
        <div className="guarantee_container">
          <h1 style={{ textAlign: "center" }}>{header}</h1>
          <hr></hr>
          <div className="guarantee_column">
            {desArr.map((item) => (
              <div className="guarantee_row" key={item}>
                <HiOutlineBadgeCheck
                  className="g_icon"
                  style={{ color: "var(--red)" }}
                />
                <p key={item}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GuaranteHero;
