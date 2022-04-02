import React from "react";
import "./MyProgress.css";
function MyProgress({ progress, stopColor1, stopColor2 }) {
  console.log(stopColor1);
  console.log(stopColor2);
  //   let number = document.getElementById("number");
  //   let counter = 0;
  //   setInterval(() => {
  //     counter += 1;
  //     // number.innerHTML = counter + "%";
  //     if (counter == 33) {
  //       clearInterval();
  //     } else {
  //       counter += 1;
  //       number.innerHTML = counter + "%";
  //     }
  //   }, 20);
  return (
    <>
      <div className="myprogress_circle">
        <div className="outer">
          <div className="inner">
            <div id="number">{progress} %</div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor={stopColor1 ?? "#e91e63"} />
              <stop offset="100%" stopColor={stopColor2 ?? "#673ab7"} />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="40" strokeLinecap="round" />
        </svg>
      </div>
    </>
  );
}

export default MyProgress;
