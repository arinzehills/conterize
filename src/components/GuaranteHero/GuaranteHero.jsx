import React from "react";
import "./GuaranteHero.css";
import { HiOutlineBadgeCheck } from "react-icons/hi";
function GuaranteHero({ headline, descArr }) {
  const header = "Conterize Guaranteed Quality Assurance";

  return (
    <>
      <div className="guarantee_section">
        <div className="guarantee_container">
          <h2
            className=""
            style={{
              textAlign: "center",
              padding: 0,
              color: "var(--dark-blue)",
            }}
          >
            {headline ?? header}
          </h2>
          <hr></hr>
          <div className="guarantee_column">
            {descArr.map((item) => (
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
