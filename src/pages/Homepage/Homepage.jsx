import { useState } from "react";
import "./Homepage.css";
import Pricing from "../../components/Pricing/Pricing";
import GuaranteHero from "../../components/GuaranteHero/GuaranteHero";
import Hero from "../../components/Hero/Hero";
import FAQs from "../../components/FAQs/FAQs";
import Pricingcontact from "../Pricing/Pricingcontact";
import FooterSvg from "../../components/FooterSvg/FooterSvg";
import Footer from "../../components/Footer/Footer";
import Login from "../Login/Login";

function Homepage() {
  const [count, setCount] = useState(0);
  const homeData = {
    sub_headline: "Conterize",
    headline: "Content Creation as a subscription service for Startups",
    description:
      "Conterize helps automate your startup Content " +
      "Blog articles, landing page content, email copy, " +
      " social media graphics and more at scale every month.",
    showButton: true,
    show2Button: false,
    buttonLabel: ["Sign up"],
    img: "../../images/studio.png",
    // imgStart: "start",
    isCenter: true,
    showImg: true,
    smallImage: "images/twocircle.png",
  };
  const homeData2 = {
    headline: "The Startup Content Partner",
    description:
      "Too long a time. Let Conterize take your startup content game to the next level! " +
      "Get the right content your business needs to drive traffic, build trust, grow and scale.",
    imgStart: "start",
    img: "../../images/studio2.svg",
    showImg: true,
  };
  const data = [
    {
      heading: "Step 1",
      desc:
        "Request Content from your dashboard by submitting the requirements. " +
        "You can also invite your team members " +
        "to manage content request.",
      progress: 33,
      // stopColor: ["var(--red)", "var(--light-orange)"],
      stopColor1: "var(--dark-blue)",
      stopColor2: "var(--red)",
    },
    {
      heading: "Step 2",
      desc: "Our system matches your request with the best content creators suitable for your specific content needs.",
      progress: 66,
      // stopColor: ["var(--dark-blue)", "var(--light-red)"],
      stopColor1: "var(--light-orange)",
      stopColor2: "var(--dark-orange)",
    },
    {
      heading: "Step 3",
      desc:
        "Sit back and relax while you receive your content " +
        "on your dashboard in few days. to buy tokens" +
        " you can trust us for fast and safe transactions",
      progress: 100,
      stopColor1: "var(red)",
      stopColor2: "var(--dark-blue)",
    },
  ];
  const desArr = [
    "• 100 percent unique Content",
    "•	Only top 5%  content creators are accepted",
    "•	Unlimited Revisions till you are satisfied",
    "•	Customizable Monthly Plans at your Request",
    "•	Change Monthly Subscription or Cancel Anytime",
    "•	100% money back Guarantee. No long story",
  ];
  return (
    <div className="Homepage">
      <Hero {...homeData} />
      <Hero {...homeData2} />
      <Pricing data={data} height="400px" />
      <GuaranteHero descArr={desArr} />
      <Hero
        isCenter={true}
        subHeadline=""
        headline="Ready to take your startup content game to the next level?"
        showButton={true}
        show2Button={true}
        buttonLabel={["GET STARTED", "SPEAK TO US"]}
      />
      <FAQs />
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;
