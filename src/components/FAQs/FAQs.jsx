import React from "react";
import "./Faqs.css";
import { MdArrowForwardIos } from "react-icons/md";
import { BsRecordCircle } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

const data = [
  {
    heading: "How does it work?",
    desc: [
      "After signing up, you will see different monthly plans to choose from on your dashboard. ",
      "Pick a plan and submit a content request from your dashboard. Specify requirements, word counts and content type, etc. " +
        "Our algorithm finds the best content creators for your requirements and the content is delivered to you on your dashboard where you can accept or request a revision.  ",
      "You can also Invite any member of your team to make a content request or handle content requests for you.      ",
    ],
  },
  {
    heading: "How many pieces of content can I request per month? ",
    desc: [
      "Each plan comes with a variety of content options.",
      "For instance, the Starter plan comes with 4,000 worded content and five social media graphics per month. On the 4,000 worded content, you can request 8 500 worded articles or 4 1,000 worded articles or 2 2,000 worded articles, or any other split word count you like. Also, this could be articles, newsletters, product descriptions, ebooks, etc.",
      "For the Social media graphics, it could be flyers, cover photos, banner images, quote graphics, infographics, or just any other form of social media graphic. You can also split the graphic types. For instance, you can request three flyers and two cover photo designs. ",
    ],
  },
  {
    heading: "What if I don’t like my content?",
    desc: [
      "We offer unlimited revisions for all content created as part of your monthly subscription plan. We also offer a 100% money-back guarantee. ",
    ],
  },
  {
    heading: "Can I cancel anytime?",
    desc: [
      "Yes, you can cancel the monthly" +
        "subscription at any time and resume it any " +
        "time of your choice. No contracts. ",
    ],
  },
];
function FAQs() {
  const [click, setClick] = useState(false);
  const onClick = () => setClick(!click);
  return (
    <>
      <div className="faq_section">
        <div className="faq_wrapper">
          <h1>Frequently Asked Questions</h1>
          {data.map((item) => (
            <div className="faq_container" onClick={onClick} key={item.heading}>
              <div className="faq_row">
                <h2>{item.heading}</h2>
                <div className="icon_wrapper">
                  {click ? (
                    <MdArrowForwardIos
                      className="faq_icon"
                      key={item.heading}
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      style={{ fontSize: "2em" }}
                      className="faq_icon"
                      key={item.heading}
                    />
                  )}
                </div>
              </div>
              {/* <div className="faq_body"></div> */}
              {click &&
                item.desc.map((des) => (
                  <div className="guarantee_row">
                    <BsRecordCircle
                      className="g_icon"
                      style={{ color: "var(--red)" }}
                    />
                    <p style={{ alignContent: "center" }}>{des}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQs;
